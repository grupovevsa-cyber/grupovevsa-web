# Guía de Despliegue en Producción (Vercel + Supabase)

Tu sistema E-commerce y el SaaS de facturación están listos para salir a la luz. Al usar Vercel (conectado con Github) logramos **Despliegue Continuo (CI/CD)**: cualquier cambio futuro que hagamos se actualizará en tu dominio automáticamente en segundos.

Sigue estos 3 simples pasos:

## 1. Conectar GitHub con Vercel

1. Ve a **[Vercel.com](https://vercel.com/new)** e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"** (Añadir nuevo proyecto).
3. En la lista de repositorios, busca `grupovev-web` (o el nombre que le diste a este repositorio en tu GitHub) y haz clic en **Import**.
4. En la configuración del proyecto:
   - **Framework Preset**: Asegúrate de que diga **Next.js**.
   - **Root Directory**: Déjalo como está (`./`).

## 2. Configurar Variables de Entorno (¡Muy Importante!)

Antes de darle al botón "Deploy", despliega la sección **Environment Variables**. Debes copiar las variables secretas que tienes en tu archivo `.env` local para que la base de datos de Supabase se conecte en producción.

Añade estas 3 variables clave:
- `DATABASE_URL` (Tu conexión Pooling IPv4 de Supabase para Prisma)
- `DIRECT_URL` (Tu conexión directa IPv4 de Supabase)
- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` (si las estás utilizando en el frontend)

Una vez añadidas las variables, haz clic en el botón azul **Deploy**. Vercel construirá tu proyecto (tardará unos 2-3 minutos).

## 3. Enlazar tu Dominio Personalizado

Cuando el despliegue termine y veas la pantalla de "Congratulations!":
1. Haz clic en **"Continue to Dashboard"**.
2. Ve a la pestaña **"Settings"** (Configuración) en el menú superior.
3. En la barra lateral izquierda, selecciona **"Domains"**.
4. Escribe tu dominio (ej. `lacasadeltpv.com` o `grupovev.com`) y haz clic en **Add**.
5. Vercel te dará unas instrucciones de DNS (generalmente un registro `A` apuntando a `76.76.21.21` o un registro `CNAME`).
6. Ve a tu proveedor de dominios (GoDaddy, Hostinger, Cloudflare, etc.), entra a la gestión de DNS y añade esos registros.
7. ¡Listo! Vercel generará el certificado SSL gratis y tu sitio estará vivo en tiempo real.

> [!TIP]
> **Modo Local:** El servidor de desarrollo ya está corriendo en tu máquina en **http://localhost:3000**. Puedes ver y probar el sistema y el CMS en vivo allí mismo.
