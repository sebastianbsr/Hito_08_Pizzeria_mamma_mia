import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext.jsx";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const { token } = useUser();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/profile" replace />}
        />

        <Route
          path="/register"
          element={!token ? <RegisterPage /> : <Navigate to="/profile" replace />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" replace />}
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      <Footer />
    </>
  );
}
