import { useEffect } from "react";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { email, logout, getProfile, token } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // opcional (pero útil): confirma que /me funciona con el token
    if (!token) return;
    getProfile().catch(() => {});
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="container my-4" style={{ maxWidth: 700 }}>
      <h2 className="mb-3">Perfil</h2>
      <p className="mb-4">
        <span className="fw-semibold">Email:</span> {email}
      </p>

      <button className="btn btn-dark" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </main>
  );
}