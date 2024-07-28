import { ID } from "appwrite";
import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props, { children }) {
  const [user, setUser] = useState(null);

  async function userDetails() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (error) {
      console.error("Failed to get user details:", error);
      setUser(null);
    }
  }

  useEffect(() => {
    userDetails();
  }, []);

  async function login(email, password) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    window.location.replace("/"); // you can use different redirect method for your application
  }

  async function recover(email) {
    const url = `${window.location.origin}/redirect`; // Replace with your actual route
    try {
      await account.createRecovery(email, url);
      console.log(`Recovering password for ${email}`);
      window.location.replace(url); // Redirect after successful recovery
    } catch (error) {
      console.error(`Failed to recover password for ${email}:`, error);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(name, email, password) {
    try {
      await account.create(ID.unique(), name, email, password);
      await login(email, password);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <UserContext.Provider
      value={{ current: user, login, recover, logout, register, userDetails }}
    >
      {props.children}
      {children}
    </UserContext.Provider>
  );
}
