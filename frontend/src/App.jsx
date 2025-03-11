import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/userAuthStore";

const App = () => {
  const {authUser, checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });
  
  return (
   <div>

    <Navbar />

    <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
    </Routes>

    </div>
  );
};

export default App;