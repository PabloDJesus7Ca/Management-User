# 👥 Sistema de Gestión de Usuarios (CRUD Fullstack)

Aplicación web fullstack desarrollada con Angular en el frontend y Node.js en el backend, diseñada para la gestión eficiente de usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El sistema implementa una arquitectura cliente-servidor, consumiendo una API REST construida con Express y conectada a una base de datos PostgreSQL. Permite la actualización dinámica de la información, garantizando una experiencia fluida y en tiempo real.

## 🚀 Características principales

* ➕ Registro de nuevos usuarios
* 📋 Listado de usuarios
* ✏️ Edición de información
* ❌ Eliminación de usuarios
* 🔄 Actualización dinámica de datos
* 🌐 Consumo de API REST
* 🧱 Arquitectura cliente-servidor

## 🛠️ Tecnologías utilizadas

* Angular
* Node.js
* Express
* PostgreSQL
* TypeScript
* HTML
* CSS

## 📌 Arquitectura
El proyecto está dividido en dos partes principales:

* Frontend: Aplicación en Angular encargada de la interfaz de usuario
* Backend: API REST desarrollada con Node.js y Express
* Base de datos: PostgreSQL para almacenamiento persistente

* ## 📁 Estructura del proyecto
  
* Management-User/
* ├── Frontend/
* ├── Backend/
* ├── .gitignore
* └── README.md

## ▶️ Ejecución del proyecto

### 🔹 Backend

* npm install
* npm run dev


### 🔹 Frontend

* npm install
* ng serve


## 📦 Build de producción

ng build --configuration production

## 🔐 Variables de entorno
Crea un archivo .env en la carpeta Backend con tus configuraciones:

* DB_HOST=localhost
* DB_USER=tu_usuario
* DB_PASSWORD=tu_password
* DB_NAME=tu_base_de_datos
* DB_PORT=5432
* URL_ENDPOINT=url_de_tu_api
* PORT=3000

## 🔮 Roadmap (Mejoras futuras)

* 🔐 Implementación de autenticación (login/registro con JWT)
* 🛡️ Control de acceso por roles (admin / usuario)
* 📄 Paginación en el listado
* 📊 Dashboard con estadísticas
* 📧 Notificaciones por correo electrónico
* ☁️ Despliegue en la nube
* 🧪 Pruebas unitarias y de integración
* 📱 Diseño responsive mejorado

## 📌 Objetivo

Este proyecto fue desarrollado con fines educativos, enfocado en la construcción de aplicaciones fullstack, consumo de APIs REST, manejo de bases de datos y buenas prácticas en desarrollo web moderno.
