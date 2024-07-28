import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import { Home } from "./pages/Home";
import Navbar from "./pages/Navbar";
import { Login } from "./pages/Login"; // Change this line
import { Signup } from "./pages/Signup"; // Change this line
import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <IdeasProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </IdeasProvider>
      </UserProvider>
    </Router>
  );
}

export default App;