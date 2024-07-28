import React from "react";
import { useUser } from "../lib/context/user";

export default function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a className="homeLink" href="/">
        <img className="navImg" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
      </a>
      <div>
        {user.current ? (
          <button className="navBtn" onClick={user.logout}>
            Logout
          </button>
        ) : (
          <a href="/login">
            <button className="navBtn">
              Login
            </button>
          </a>
        )}
      </div>
    </nav>
  );
}
