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
          <button className="navBtn" href="/login">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
