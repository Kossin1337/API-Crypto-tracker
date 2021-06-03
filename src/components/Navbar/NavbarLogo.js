import logo from "./logo.jpg";
import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link to="/">
      <div className="navbar-logo">
        <img className="logo-image" src={logo} alt="t-rex logo" />
        <h1 className="logo-text">CoinRex</h1>
      </div>
    </Link>
  );
};
