import bg from "../assets/header.jpg";

export default function Header() {
  return (
    <header
      className="text-white text-center d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "280px",
      }}
    >
      <div className="container">
        <h1 className="display-5 fw-bold">¡Pizzería Mamma Mia!</h1>
        <p className="lead mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
}
