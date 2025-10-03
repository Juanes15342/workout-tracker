<<<<<<< HEAD
<<<<<<< HEAD
# Workout Tracker API – Users

## Endpoints Users

### 1. Listar todos los usuarios
`GET /api/v1/users`
- Parámetros opcionales: `?limit=10`
- Respuesta 200: lista de usuarios
- Respuesta 400: parámetro inválido

### 2. Obtener usuario por ID
`GET /api/v1/users/:id`
- Respuesta 200: usuario encontrado
- Respuesta 404: no encontrado
- Respuesta 400: ID inválido

### 3. Crear usuario
`POST /api/v1/users`git merge feat/exercises
- Body JSON: `{ "name": "...", "email": "...", "password": "..." }`
- Respuesta 201: usuario creado
- Respuesta 400: datos inválidos

### 4. Actualizar usuario
`PUT /api/v1/users/:id`
- Respuesta 200: usuario actualizado
- Respuesta 404: no encontrado

### 5. Eliminar usuario
`DELETE /api/v1/users/:id`
- Respuesta 200: usuario eliminado
- Respuesta 404: no encontrado

### 6. Buscar usuario por email
`GET /api/v1/users/email/:email`
- Respuesta 200: usuario encontrado
- Respuesta 404: no encontrado

### 7. Estadísticas
`GET /api/v1/users/stats`
- Respuesta 200: `{ total, lastCreatedAt }`
=======
# 📌 Proyecto: Gestión del Entrenamiento

Este proyecto implementa un backend para la **gestión de entrenamientos**, donde los usuarios pueden:

- Crear, actualizar y eliminar **planes de entrenamiento**.
- Definir **ejercicios con series, repeticiones y peso**.
- **Programar entrenamientos** en fechas específicas.
- **Listar entrenamientos** por fecha y hora.
- **Generar reportes** de progreso.

Se implementa una **API RESTful** protegida con **JWT**, siguiendo buenas prácticas de desarrollo, control de versiones con ramas por recurso y commits progresivos.

---

## 🛠️ Tecnologías utilizadas
- **Node.js + Express** → servidor web y API.
- **Memoria en arrays** (sin base de datos, según la restricción).
- **JWT (JSON Web Token)** → autenticación.
- **Jest / Supertest** → pruebas unitarias.
- **OpenAPI (Swagger)** → documentación de endpoints.

---

## 🌿 Flujo de ramas y commits

Cada **recurso** de la API tiene su propia rama de desarrollo (`feat/users`, `feat/workouts`, `feat/exercises`, `feat/progress`).
En cada rama se siguen **7 commits estándar**:

1. **Scaffold de router y endpoints básicos**
2. **Implementación de rutas GET** (lista e individual)
3. **Creación de recursos con POST**
4. **Actualización con PUT y PATCH**
5. **Eliminación con DELETE**
6. **Validación de parámetros y estados HTTP**
7. **Documentación en README con endpoints y ejemplos**

### Ejemplo ramas creadas:
- `feat/users` ✅
- `feat/workouts` (en proceso)
- `feat/exercises`
- `feat/progress`

---

## 🔐 Autenticación
Todos los endpoints están protegidos con **JWT**.
Se debe incluir el token en los headers:
>>>>>>> feat/workouts
=======
# API de Gestión del Progreso de Entrenamiento

Este módulo corresponde a la rama **`feat/progress`**.  
Se encarga de registrar y gestionar el progreso de los usuarios sobre sus ejercicios.

---

## 📌 Ramas y Commits

- Rama: `feat/progress`
- Commits realizados:
  1. Scaffold de router y endpoints básicos (`GET`)
  2. Implementación de rutas `GET` (lista e individual)
  3. Creación de recursos con `POST`
  4. Actualización con `PUT` y `PATCH`
  5. Eliminación con `DELETE`
  6. Validación de parámetros, query strings y estados HTTP
  7. Documentación de endpoints (este archivo)

---

## 📌 Endpoints de `/progress`

### 1️⃣ GET `/api/v1/progress`
Obtiene la lista completa de progreso.

**Request**
```http
GET /api/v1/progress
>>>>>>> feat/progress
