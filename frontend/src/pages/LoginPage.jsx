import { useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [feedback, setFeedback] = useState(null);

  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!cleanEmail || !password) return alert("Completa email y password");
    if (password.length < 6) return alert("Password mínimo 6 caracteres");

    try {
      await login(cleanEmail, password);
      navigate("/profile", { replace: true });
    } catch (err) {
      alert(err.message || "Error al iniciar sesión");
    }

    const text = "Authentication successful! ✅";
    setFeedback({ type: "success", text });
    alert(text);

    setEmail("");
    setPassword("");
  };

  return (
    <main className="container my-5">
      <div className="mx-auto" style={{ maxWidth: 520 }}>
        <h2 className="mb-4">Login</h2>

        {feedback && (
          <div className={`alert alert-${feedback.type}`} role="alert">
            {feedback.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
