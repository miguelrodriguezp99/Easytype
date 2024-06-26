import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useAuthContext } from "./context/AuthContext";
import LoginSignup from "./pages/login-signup/LoginSignup";
import About from "./pages/about/About";
import Settings from "./pages/settings/Settings";
import Leaderboard from "./pages/leaderboard/Leaderboard";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginSignup />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* error route */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/404" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
