import React from 'react';
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import Navbar from './pages/Navbar';
import './App.css';

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <IdeasProvider>
          <Navbar /> {/* Add the navbar before page content */}
          <main>{isLoginPage ? <Login /> : <Home />}</main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

export default App;
