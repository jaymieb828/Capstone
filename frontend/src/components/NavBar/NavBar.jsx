import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        
        <li className="home">
          <Link to= '/' style = {{ textDecoration: 'none', color: 'white'}}>
            <b>Home</b>
          </Link>
        </li>
        <li className="about">
          <Link to= '/' style = {{ textDecoration: 'none', color: 'white'}}>
            <b>About</b>
          </Link>
        </li>
        <li className="pantry">
          <Link to= '/pantry' style = {{ textDecoration: 'none', color: 'white'}}>
            <b>Pantry</b>
          </Link>
        </li>
        <li className="shopping-list">
          <Link to= '/shopping-list' style = {{ textDecoration: 'none', color: 'white'}}>
            <b>Shopping List</b>
          </Link>
        </li>
        <li className="recipes">
          <Link to= '/' style = {{ textDecoration: 'none', color: 'white'}}>
            <b>Recipes</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Welcome to My Pantry</b>
          </Link>
        </li>
        
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
