import React from "react";
import { Link } from 'react-router-dom';
import { useUser } from "../lib/context/user";

export default function Navbar() {
  const user = useUser();

  return (
    <nav>
      <Link className="homeLink" to="/">
        <img
          className="navImg"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
      </Link>
      <div>
        {user.current ? (
          <button className="navBtn" onClick={user.logout}>
            Logout
          </button>
        ) : (
          <div className="navLinks">
            <Link to="/login">
              <button className="navBtn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="navBtn">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}