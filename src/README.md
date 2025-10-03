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