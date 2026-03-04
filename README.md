# 🍕 Pizzería Mamma Mia! — Hito 7 (React + Vite)

Proyecto de la app **Pizzería Mamma Mia!** desarrollado con **React + Vite**.  
En este hito se incorpora **React Router dinámico, rutas protegidas y UserContext**.

---

## ✅ Requerimientos implementados

### Hito 1
- Componentes base: `Navbar`, `Home`, `Footer`, `Header`, `CardPizza`
- Render condicional en Navbar según token
- Home renderiza pizzas
- Formateo de precios

### Hito 2
- Vistas `Register` y `Login`
- Formularios con `useState`
- Validaciones básicas

### Hito 3
- Render dinámico con `.map()`
- Vista `Cart` con:
  - Aumentar / disminuir cantidad
  - Eliminar producto si llega a 0
  - Cálculo de total

### Hito 4
- Consumo de API con `fetch`
- Home obtiene pizzas desde:
  - `GET /api/pizzas`
- Pizza obtiene detalle desde:
  - `GET /api/pizzas/:id`

### Hito 5
- Implementación de React Router
- Rutas:
  - `/`
  - `/login`
  - `/register`
  - `/cart`
  - `/pizza/:id`
  - `/profile`
  - `/404`
- Redirección automática para rutas inexistentes

### Hito 6
- Implementación de **Context API**
- `CartProvider` como estado global del carrito
- Total sincronizado entre `Navbar` y `Cart`
- Botón “Añadir” agrega productos desde Home

### Hito 7
- Implementación de `useParams` en `Pizza.jsx`
- Ruta dinámica `/pizza/:id`
- Creación de `UserContext`
- Rutas protegidas:
  - `/profile` requiere token
  - `/login` y `/register` bloqueadas si token es true
- Botón **Pagar** deshabilitado si no hay token
- Logout modifica el estado global del usuario

---

## 🧱 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Bootstrap
- Backend Node (API pizzas)