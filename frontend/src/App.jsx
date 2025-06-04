import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Videos from "./pages/Videos";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import Live from "./pages/Live";
import useThemeStore from '../store/useThemeStore'
import Settings from './pages/Settings'
import React from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div data-theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/live" element={<Live />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;