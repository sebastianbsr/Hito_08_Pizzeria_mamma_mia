import { Link } from "react-router-dom";
import { formatCLP } from "../utils/format.js";
import { useCart } from "../context/CartContext.jsx";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { token, logout } = useUser();
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-decoration-none" to="/">
          Pizzería Mamma Mia!
        </Link>

        <div className="d-flex gap-2">
          <Link className="btn btn-outline-light" to="/">
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link className="btn btn-outline-light" to="/profile">
                🔓 Profile
              </Link>
              <button className="btn btn-outline-light" onClick={logout}>
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">
                🔐 Login
              </Link>
              <Link className="btn btn-outline-light" to="/register">
                🔐 Register
              </Link>
            </>
          )}

          <Link className="btn btn-success" to="/cart">
            🛒 Total: ${formatCLP(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
}
