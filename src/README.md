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
