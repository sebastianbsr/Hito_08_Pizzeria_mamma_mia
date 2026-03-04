import { useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [feedback, setFeedback] = useState(null);

  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !password || !confirmPassword) {
      return alert("Completa todos los campos");
    }
    if (password.length < 6) {
      return alert("Password mínimo 6 caracteres");
    }
    if (password !== confirmPassword) {
      return alert("Passwords no coinciden");
    }

    try {
      await register(cleanEmail, password);
      navigate("/profile");
    } catch (err) {
      alert(err.message || "Error al registrar");
    }

    const text = "Registro exitoso ✅";
    setFeedback({ type: "success", text });
    alert(text);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="container my-5">
      <div className="mx-auto" style={{ maxWidth: 520 }}>
        <h2 className="mb-4">Register</h2>

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

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
