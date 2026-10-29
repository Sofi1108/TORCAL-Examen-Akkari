BASE NEUTRA DEL CONTROL C03 - SIN SOLUCIÓN DEL DOMINIO

Preparación CON internet antes del jueves: usa Node.js 22 (la base requiere Node >=20.19.4). En backend y frontend ejecuta npm ci. No borres node_modules del equipo antes del control.

Crea la base de datos control_databridge en PostgreSQL local. En backend/src/app.module.ts cambia TU_CLAVE_LOCAL por tu contraseña local. Desde backend: npm run build y npm run start:dev. Comprueba http://localhost:3000/salud.

Desde frontend: npx --no-install expo start --offline. Utiliza Expo Go compatible instalado previamente o emulador ya preparado. Repite la comprobación con internet desconectado, conservando la red local si usas móvil físico. El navegador del móvil debe poder consultar la API con la IP del ordenador.

La base no incluye Entity, DTOs, Service, Controller ni operaciones HTTP del dominio del examen. Se proporciona para evitar instalaciones y scaffolding durante los 60 minutos. La entregará el profesor como base autorizada.

Para entregar el control: ZIP del código, sin node_modules, con README de la solución. El cuaderno completo tiene su formulario y esta base no se entrega por esa opción.
