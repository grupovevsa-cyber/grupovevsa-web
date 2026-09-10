const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando Seed de La Casa del POS...");

  // 1. Limpiar datos existentes de tienda
  await prisma.store_order_items.deleteMany({});
  await prisma.store_payments.deleteMany({});
  await prisma.store_orders.deleteMany({});
  await prisma.store_customers.deleteMany({});
  await prisma.store_products.deleteMany({});
  await prisma.store_categories.deleteMany({});

  // 2. Crear Categorías
  const catQuioscos = await prisma.store_categories.create({
    data: { name: 'Quioscos', slug: 'quioscos' }
  });
  
  const catCajones = await prisma.store_categories.create({
    data: { name: 'Cajones', slug: 'cajones' }
  });
  
  const catImpresoras = await prisma.store_categories.create({
    data: { name: 'Impresoras', slug: 'impresoras' }
  });

  // 3. Crear Productos de ejemplo (Basados en capturas del usuario)
  await prisma.store_products.create({
    data: {
      name: 'QUIOSCO Windows GEON H3 | J6412 | 8GB RAM | 128GB | 21,5" | Pie sobremesa y suelo',
      slug: 'quiosco-windows-geon-h3-j6412',
      description: 'Moderniza tu punto de atención con el Quiosco Geon H3, un terminal de autoservicio con pantalla táctil de 21.5", procesador Intel Quad-Core y sistema Windows 11, ideal para pagos rápidos...',
      price: 1095.04,
      stock: 10,
      sku: 'GEON-H3-WIN',
      category_id: catQuioscos.id,
      image_urls: ['/placeholder-quiosco.png']
    }
  });

  await prisma.store_products.create({
    data: {
      name: 'Cajón Portamonedas Negro 33CM (Automático)',
      slug: 'cajon-portamonedas-negro-33cm',
      description: 'Cajón portamonedas resistente de 33 cm con apertura automática desde impresora.',
      price: 35.00,
      stock: 50,
      sku: 'CAJON-33',
      category_id: catCajones.id,
      image_urls: ['/placeholder-cajon.png']
    }
  });

  await prisma.store_products.create({
    data: {
      name: 'Impresora Térmica de Tickets 80mm',
      slug: 'impresora-termica-tickets-80mm',
      description: 'Impresora térmica de alta velocidad, conexión USB y red. Corte automático.',
      price: 120.50,
      stock: 25,
      sku: 'IMP-80MM',
      category_id: catImpresoras.id,
      image_urls: ['/placeholder-impresora.png']
    }
  });

  console.log("¡Catálogo base sembrado exitosamente!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
