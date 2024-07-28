import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite"; // Adjust the import path as needed

function RecoverPW() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRecover = async () => {
    const url = `${window.location.origin}/redirect`; // Redirect URL
    try {
      await account.createRecovery(email, url);
      console.log(`Recovering password for ${email}`);
      navigate("/redirect");
    } catch (error) {
      console.error(`Failed to recover password for ${email}:`, error);
      setError("Invalid email or password");
    }
  };

  return (
    <section>
      <form
        className="accountForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleRecover();
        }}
      >
        <h1>Recover Password</h1>
        <p>Enter your email to recover your password</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Recover Password</button>
        <div>{error && <p className="error">{Error}</p>}</div>
      </form>
    </section>
  );
}

export default RecoverPW;
