import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const { user, logout } = useGlobalContext();
  const { pathname } = useLocation();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Featherstone Booking</span>
        <div className="navItems">
        {user ? (
            <Link className="btn" to={logout}>
              Logout
            </Link>
          ) : pathname === "/" ? (
            <Link to="/register" className="btn">
              Register
            </Link>
          ) : (
            <Link to="/" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
