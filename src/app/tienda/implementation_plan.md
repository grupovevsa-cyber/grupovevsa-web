# Implementación de E-Commerce y CMS para "La Casa del POS"

Este plan detalla la arquitectura y los pasos para construir la tienda en línea completa, el carrito de compras, el flujo de pagos (Checkout) y el Panel Administrativo (CMS).

> [!IMPORTANT]
> Debido a la enorme magnitud del proyecto (Arquitectura de Base de Datos, CMS Completo, Pasarelas de Pago y Frontend), el desarrollo se dividirá en 5 fases. Requiero tu aprobación de este plan arquitectónico antes de comenzar a generar el código de la Base de Datos y el CMS.

## User Review Required

- **Migración de Base de Datos**: Crearé nuevas tablas en Supabase exclusivas para la tienda (`store_products`, `store_orders`, etc.) para no interferir con el SaaS multi-tenant de Facturación actual.
- **Población de Datos (Scraping)**: Las plataformas de comercio suelen bloquear el "scraping" automatizado por bots. Para evitar bloqueos, proponemos crear un **script de poblamiento (Seed)** con un catálogo inicial basado en las imágenes y referencias que me diste. Una vez construido el CMS, tú o tu equipo podrán importar/crear el resto de los artículos fácilmente. ¿Estás de acuerdo con este enfoque?
- **Pasarelas de Pago**: Se crearán las estructuras para Yappy, ACH, Tarjetas, Paguelo Facil y links de BCT Bank. Ten en cuenta que para que los pagos funcionen en producción, requerirás inyectar las credenciales API (Secret Keys) en el archivo `.env` posteriormente.

---

## Fases de Desarrollo

### Fase 1: Arquitectura de Base de Datos (Prisma)
Se añadirán los siguientes modelos al archivo `schema.prisma`:
- `store_categories` (Categorías y subcategorías)
- `store_products` (Información, precio en USD, stock, SKU)
- `store_product_images` (Galería de imágenes vinculada a Supabase Storage)
- `store_orders` y `store_order_items` (Manejo de carritos convertidos en pedidos)
- `store_customers` (Registro de clientes de la tienda)
- `store_payments` (Registro de transacciones y estados de pago)

### Fase 2: Desarrollo del Panel Administrativo (CMS)
Rutas protegidas bajo `/admin/tienda/`:
- **Dashboard**: Estadísticas de ventas y pedidos recientes.
- **Gestión de Productos**: CRUD (Crear, Leer, Actualizar, Borrar) de artículos, asignación de precios, stock e imágenes.
- **Gestión de Pedidos**: Ver órdenes, cambiar estados (Pendiente, Pagado, Enviado).
- **Gestión de Categorías**: Editor del Mega Menú.
- **Gestión de Pagos**: Activar/Desactivar métodos de pago (Yappy, ACH, etc.).

### Fase 3: Estado Global y Carrito de Compras (Frontend)
- Implementación de **Zustand** (o React Context) para manejar el carrito persistente (incluso si el usuario recarga la página).
- Creación de la página `/tienda/cart` con el diseño exacto enviado en la captura de pantalla (Resumen, control de cantidades, subtotal).

### Fase 4: Checkout y Pasarelas de Pago
- Flujo de recolección de datos de envío y facturación.
- Selector de Método de Pago.
- API Routes (`/api/checkout/...`) para procesar las transacciones simuladas/reales hacia las APIs de Paguelo Facil y BCT Bank.

### Fase 5: Integración y Siembra de Datos
- Conexión de las vistas estáticas actuales (`/tienda/categoria` y `/tienda/producto`) con la base de datos real.
- Ejecución del script para añadir los productos insignia (Quioscos, TPVs, Impresoras) mostrados en tus capturas.

---

## Verification Plan

### Automated / Backend Tests
- Generar y ejecutar las migraciones de Prisma.
- Verificar que el Prisma Client reconozca los nuevos modelos de la tienda.

### Manual Verification
1. Acceder al `/admin/tienda`, crear un producto de prueba y subir una imagen.
2. Navegar a `/tienda`, ver el producto, añadirlo al carrito.
3. Ir a `/tienda/cart`, verificar que los subtotales en USD se calculen correctamente.
4. Proceder al checkout, seleccionar "ACH" o "Yappy" y verificar que la orden se registre en el panel administrativo como "Pendiente".
