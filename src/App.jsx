// import { UserProvider } from "./lib/context/user";
import { UserProvider } from "./lib/context/userData";
import { IdeasProvider } from "./lib/context/ideas";
import { Home } from "./pages/Home";
import Navbar from "./pages/Navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import RecoverPW from "./pages/RecoverPW"; // Updated line
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Redirect from "./pages/Redirect";


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
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/recoverpw" element={<RecoverPW />} />
          </Routes>
        </IdeasProvider>
      </UserProvider>
    </Router>
  );
}

export default App;