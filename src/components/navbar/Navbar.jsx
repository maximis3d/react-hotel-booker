import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Featherstone Booking</span>
        <div className="navItems">
          <Link to="/signup">
            <button className="navButton">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
