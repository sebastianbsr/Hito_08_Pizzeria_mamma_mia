# 🍕 Pizzería Mamma Mia! — Hito 8 (React + Vite)

Proyecto de la app **Pizzería Mamma Mia!** desarrollado con **React + Vite**.  
En este hito final se implementa **autenticación real con JWT** y **checkout** consumiendo el backend.

---

## ✅ Requerimientos implementados

### Hito 1
- Componentes base: `Navbar`, `Home`, `Footer`, `Header`, `CardPizza`
- Render condicional en Navbar según token
- Render de pizzas y formateo de precios

### Hito 2
- Vistas `Register` y `Login`
- Formularios con `useState` y validaciones

### Hito 3
- Vista `Cart` con:
  - Aumentar / disminuir cantidad
  - Eliminar producto si llega a 0
  - Cálculo de total

### Hito 4
- Consumo de API con `fetch` + `useEffect`
- Home obtiene pizzas desde `GET /api/pizzas`
- Pizza obtiene detalle desde `GET /api/pizzas/:id`

### Hito 5
- React Router implementado
- Rutas: `/`, `/login`, `/register`, `/cart`, `/pizza/:id`, `/profile`, `/404`

### Hito 6
- Context API para carrito
- Total sincronizado entre `Navbar` y `Cart`
- Botón “Añadir” agrega productos desde Home

### Hito 7
- `useParams` en `Pizza.jsx` (ruta dinámica `/pizza/:id`)
- `UserContext` (token simulado) + rutas protegidas
- Botón pagar deshabilitado sin token

### Hito 8
- Autenticación real con JWT consumiendo:
  - `POST /api/auth/login`
  - `POST /api/auth/register`
- `UserContext` guarda `token` y `email`
- Logout elimina `token` y `email`
- Perfil del usuario autenticado con:
  - `GET /api/auth/me`
- `Profile` muestra email y permite cerrar sesión
- `Navbar` permite cerrar sesión
- Checkout del carrito con:
  - `POST /api/checkouts` (requiere `Authorization: Bearer <token>`)
- Mensaje de éxito al finalizar compra

---

## 🧱 Tecnologías utilizadas
- React
- Vite
- React Router DOM
- Context API
- Bootstrap
- Backend Node (API pizzas + auth JWT)

---

## ▶️ Ejecución del proyecto (Backend + Frontend)

### 1️⃣ Levantar Backend
En una terminal:

```bash
cd backend
npm install
npm start