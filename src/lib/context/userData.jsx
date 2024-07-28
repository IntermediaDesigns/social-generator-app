import React, { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwrite";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const loggedInUser = await account.get();
        setUser(loggedInUser);
      } catch (error) {
        if (error.code === 401) {
          console.error("User is not authenticated:", error);
        } else {
          console.error("Failed to fetch user:", error);
        }
      }
    }

    fetchUser();
  }, []);

  const isLoggedIn = async () => {
    try {
      return await account.get(); // Ensure 'account' is defined or imported
    } catch (error) {
      console.error("Failed to check if user is logged in:", error);
      return null;
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const register = async (name, email, password) => {
    if (!isValidEmail(email)) {
      console.error("Invalid email address");
      return;
    }

    try {
      await account.create(name, email, password); // Ensure 'account' is defined or imported
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  const login = async (email, password) => {
    try {
      await account.createSession(email, password); // Ensure 'account' is defined or imported
      setUser(isLoggedIn);
      window.location.replace("/"); // Redirect to home page
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current"); // Ensure 'account' is defined or imported
      setUser(null);
      window.location.replace("/login"); // Redirect to login page
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const recover = async (email) => {
    try {
      const url = `${window.location.origin}/redirect`; // Replace with your actual route
      await account.createRecovery(email, url); // Ensure 'account' is defined or imported
      console.log(`Recovering password for ${email}`);
      window.location.replace(url); // Redirect after successful recovery
    } catch (error) {
      console.error(`Failed to recover password for ${email}:`, error);
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout, recover }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
