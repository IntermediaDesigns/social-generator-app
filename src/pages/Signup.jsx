import React from "react";
import { useState } from "react";
import { useUser } from "../lib/context/user";
import { Link } from 'react-router-dom';

export function Signup() {
  const user = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = () => {
    user.register(name, email, password)
        .catch(() => {
          setError("Must complete all fields. Check your email and password.");
        }
        );
  }

  return (
    <section>
      <form className="accountForm">
      <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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
          <Link to="/login">Login</Link>
        </div>
      </form>
    </section>
  );
}

