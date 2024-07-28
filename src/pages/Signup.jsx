import React from "react";
import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Signup() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = () => {
    user.register(email, password)
        .catch(() => {
          setError("Invalid email or password");
        }
        );
  }

  return (
    <section>
      <form className="accountForm">
      <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
          <button
            className="button"
            type="button"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <div className="error">
        {error}</div>
        <div className="formInfo">
          <p>Already have an account?</p>
          <a href="/src/pages/Login.jsx">Login</a>
        </div>
      </form>
    </section>
  );
}

