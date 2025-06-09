Trabajo Práctico N°3 – Sistema de Gestión de Turnos Médicos

Este proyecto es un sistema de gestión de turnos médicos. El sistema permite administrar pacientes y turnos, diferenciando entre turnos locales (atención presencial) y online (videollamada), con rutas protegidas mediante autenticación JWT. El frontend está desarrollado con vistas EJS.

Comandos para instalar y correr el sistema

npm install
npm run start

🔐 Autenticación

El sistema usa JWT para proteger las rutas privadas. Al hacer login correctamente, se genera un token que debe enviarse en las solicitudes protegidas (versión API).

📦 Tecnologías Utilizadas

Node.js +

EJS para vistas

Joi para validación

JWT para autenticación

SQLite y Mock como motores de datos intercambiables