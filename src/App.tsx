import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Registration";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="text-body font-body div">
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/create-acct" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
