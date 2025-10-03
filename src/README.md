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
`POST /api/v1/users`
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