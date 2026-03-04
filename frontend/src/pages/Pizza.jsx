import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCLP } from "../utils/format";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      setPizza(data);
    };

    getPizza();
  }, [id]);

  if (!pizza) return <p className="container mt-4">Cargando...</p>;

  return (
    <main className="container mt-4">
      <h2 className="text-capitalize">{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid mb-3" />
      <p>{pizza.desc}</p>

      <ul>
        {pizza.ingredients.map((ing) => (
          <li key={ing}>🍕 {ing}</li>
        ))}
      </ul>

      <h4>${formatCLP(pizza.price)}</h4>
    </main>
  );
}