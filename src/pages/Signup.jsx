import React, { useState } from "react";
import { useUser } from "../lib/context/userData";
import { Link } from "react-router-dom";

export function Signup() {
  const userContext = useUser();
  if (!userContext) {
    throw new Error("useUser must be used within a UserProvider");
  }
  const { register } = userContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = () => {
    register(name, email, password).catch(() => {
      setError("Must complete all fields. Check your email and password.");
    });
  };

  return (
    <section>
      <form className="accountForm">
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignup}>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
