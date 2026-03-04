import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container my-5 text-center">
      <h1 className="display-5 fw-bold">404</h1>
      <p className="text-muted">La ruta que buscas no existe.</p>

      <Link className="btn btn-dark mt-2" to="/">
        Volver al Home
      </Link>
    </main>
  );
}
