import React, { useState } from "react";
import { useUser } from "../lib/context/user";

export default function RecoverPW() {
  const { recover } = useUser();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRecover = () => {
    recover(email).catch(() => {
      setError("Invalid email");
    });
  };

  return (
    <section>
      <form className="accountForm" onSubmit={(e) => { e.preventDefault(); handleRecover(); }}>
        <h1>Recover Password</h1>
        <p>Enter your email address to recover your password.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Recover</button>
        {error && <div className="error">{error}</div>}
      </form>
    </section>
  );
}
