# 👥 Sistema de Gestión de Usuarios (CRUD Fullstack)

Aplicación web fullstack desarrollada con Angular en el frontend y Node.js en el backend, diseñada para la gestión eficiente de usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El sistema implementa una arquitectura cliente-servidor, consumiendo una API REST construida con Express y conectada a una base de datos PostgreSQL. Containerizado con Docker Compose para facilitar el despliegue en cualquier entorno.

---

## 🚀 Características principales

- ➕ Registro de nuevos usuarios
- 📋 Listado de usuarios
- ✏️ Edición de información
- ❌ Eliminación de usuarios
- 🔄 Actualización dinámica de datos
- 🌐 Consumo de API REST
- 🧱 Arquitectura cliente-servidor
- 🐳 Despliegue con Docker Compose

---

## 🛠️ Tecnologías utilizadas

| Área          | Tecnología                                 |
| ------------- | ------------------------------------------ |
| Frontend      | Angular, TypeScript, HTML, CSS             |
| Backend       | Node.js, Express                           |
| Base de datos | PostgreSQL                                 |
| Servidor      | Nginx (reverse proxy + archivos estáticos) |
| Contenedores  | Docker, Docker Compose                     |

---

## 📌 Arquitectura

```
Browser
  │
  └── http://localhost:80
        │
        ▼
      Nginx (reverse proxy)
        │
        ├── GET /           → Sirve el build de Angular
        └── GET /api/...    → Proxy al backend Express
                                  │
                                  ▼
                            Node.js / Express
                                  │
                                  ▼
                            PostgreSQL
```

- **Frontend:** Angular compilado y servido por Nginx
- **Backend:** API REST con Node.js y Express
- **Base de datos:** PostgreSQL con persistencia en volumen Docker
- **Nginx:** Reverse proxy que enruta `/api/` al backend y sirve el frontend

---

## 📁 Estructura del proyecto

```
User-Management/
├── docker-compose.yml
├── .env                    ← variables de entorno (no commitear)
├── .env.example            ← plantilla de variables
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── .dockerignore
│   └── src/
└── backend/
    ├── Dockerfile
    ├── init.sql            ← schema inicial de la DB
    ├── .dockerignore
    └── src/
```

---

## 🐳 Ejecución con Docker (recomendado)

### Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado

### Pasos

1. Clona el repositorio:

```bash
git clone <url-del-repo>
cd User-Management
```

2. Crea el archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
# Edita .env con tus valores
```

3. Levanta todos los servicios:

```bash
docker compose up --build
```

4. Abre el browser en **http://localhost**

### Comandos útiles

```bash
# Levantar en background
docker compose up -d

# Ver logs en tiempo real
docker compose logs -f

# Ver logs de un servicio específico
docker compose logs -f node

# Detener los contenedores
docker compose down

# Resetear la base de datos (borra todos los datos)
docker compose down -v && docker compose up
```

---

## ▶️ Ejecución local (sin Docker)

### 🔹 Backend

```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend

```bash
cd frontend
npm install
ng serve
```

Abre **http://localhost:4200** en el browser.

---

## 📦 Build de producción

```bash
cd frontend
ng build --configuration production
```

---

## 🔐 Variables de entorno

Crea un archivo `.env` en la **raíz del proyecto** (junto a `docker-compose.yml`) con el siguiente contenido:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tu_base_de_datos
PORT=3000
URL_ENDPOINT=http://localhost:4200
```

---

## 🔮 Roadmap (Mejoras futuras)

- 🔐 Implementación de autenticación (login/registro con JWT)
- 🛡️ Control de acceso por roles (admin / usuario)
- 📄 Paginación en el listado
- 📊 Dashboard con estadísticas
- 📧 Notificaciones por correo electrónico
- ☁️ Despliegue en la nube (AWS / DigitalOcean)
- 🧪 Pruebas unitarias y de integración
- 📱 Diseño responsive mejorado

---

## 📌 Objetivo

Este proyecto fue desarrollado con fines educativos, enfocado en la construcción de aplicaciones fullstack, containerización con Docker, consumo de APIs REST, manejo de bases de datos y buenas prácticas en desarrollo web moderno.
