import logo from "./logo.jpg";

export const NavbarLogo = () => {
  return (
    <div className="navbar-logo">
      <img className="logo-image" src={logo} alt="t-rex logo" />
      <h1 className="logo-text">CoinRex</h1>
    </div>
  );
};
