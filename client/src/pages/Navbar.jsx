import React from "react";
import { useUser } from "../lib/context/user";

export default function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user.current ? (
          <button onClick={user.logout}>Logout</button>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}

