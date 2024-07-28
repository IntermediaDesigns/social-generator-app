import React from "react";
import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    user.login(email, password)
        .catch(() => {
          setError("Invalid email or password");
        });
  };

  return (
    <section>
      <form className="accountForm">
        <h1>Login</h1>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="error">
        {error}</div>
        <div className="formInfo">
          <p>Need to sign up?</p>
          <a href="/src/pages/Signup.jsx">Sign Up Here</a>
        </div>
      </form>
    </section>
  );
}
