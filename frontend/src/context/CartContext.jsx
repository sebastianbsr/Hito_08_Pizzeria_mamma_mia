import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{id, name, img, price, count}]

  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === pizza.id);
      if (found) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  const decreaseFromCart = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        const newCount = item.count - 1;
        if (newCount <= 0) return []; // si llega a 0, se elimina
        return [{ ...item, count: newCount }];
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.count, 0),
    [cart]
  );

  const value = {
    cart,
    total,
    addToCart,          // (+)
    decreaseFromCart,   // (-)
    removeFromCart,     // eliminar directo
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider />");
  return ctx;
}
