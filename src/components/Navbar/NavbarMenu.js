import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <ul className="navbar-menu">
      <Link to="/">
        <li className="menu-item">Home</li>
      </Link>
      <li className="menu-item">Favourites</li>
      <li className="menu-item">
        Coin category <i className="fas fa-angle-down"></i>
      </li>
      <li className="menu-item">
        USD <i className="fas fa-angle-down"></i>
      </li>
    </ul>
  );
};
