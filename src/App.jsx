import { UserProvider } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import { Home } from "./pages/Home";
import Navbar from "./pages/Navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import RecoverPW from "./pages/RecoverPW"; // Updated line
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <UserProvider>
        <IdeasProvider>
          <Navbar />
          <RecoverPW />
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