import { Link } from "react-router-dom";
import { formatCLP } from "../utils/format.js";

export default function CardPizza({ id, name, price, ingredients, img, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{name}</h5>

        <p className="text-muted mb-2">Ingredientes:</p>
        <ul className="mb-3">
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h5 className="mt-auto">Precio: ${formatCLP(price)}</h5>

        <div className="d-flex justify-content-between mt-3">
          <Link to={`/pizza/${id}`} className="btn btn-outline-secondary">
            Ver más 👀
          </Link>

          <button className="btn btn-dark" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
