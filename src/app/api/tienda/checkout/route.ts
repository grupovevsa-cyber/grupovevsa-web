import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { contact, delivery, payment, items, totals } = body;

    // 1. Create or find customer
    let customer = await prisma.store_customers.findUnique({
      where: { email: contact.email }
    });

    if (!customer) {
      customer = await prisma.store_customers.create({
        data: {
          email: contact.email,
          name: `${delivery.firstName} ${delivery.lastName}`,
          phone: delivery.phone || null,
          address: delivery.address || null,
        }
      });
    }

    // 2. Create the order
    const order = await prisma.store_orders.create({
      data: {
        customer_id: customer.id,
        total: totals.total,
        status: "pending",
        payment_method: payment.method,
        shipping_method: delivery.method,
        shipping_address: delivery.method === "envio" ? delivery : null,
        items: {
          create: items.map((item: any) => ({
            product_id: item.id, // Ensure this maps to a real product UUID in production!
            quantity: item.quantity,
            price: item.price
          }))
        },
        payment: {
          create: {
            method: payment.method,
            amount: totals.total,
            status: "pending"
          }
        }
      },
      include: {
        payment: true,
      }
    });

    // 3. Handle Payment Gateway Routing
    let redirectUrl = null;
    
    if (payment.method === "yappy") {
      // TODO: Implement Yappy SDK
      redirectUrl = `/tienda/checkout/procesando?order=${order.id}&method=yappy`;
    } else if (payment.method === "bct") {
      // TODO: Implement BCT Bank link logic
      redirectUrl = `/tienda/checkout/procesando?order=${order.id}&method=bct`;
    } else if (payment.method === "tarjeta") {
      // TODO: Implement Paguelo Facil direct auth capture
      redirectUrl = `/tienda/checkout/exito?order=${order.id}`;
    } else {
      // ACH / Transferencia
      redirectUrl = `/tienda/checkout/exito?order=${order.id}`;
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      redirectUrl
    });

  } catch (error) {
    console.error("Error en checkout API:", error);
    return NextResponse.json(
      { success: false, message: "Error procesando el pedido", error: String(error) },
      { status: 500 }
    );
  }
}
