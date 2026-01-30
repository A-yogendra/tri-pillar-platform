import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Health from "./pages/Health";
import Finance from "./pages/Finance";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminUsers from "./pages/AdminUsers";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminLogs from "./pages/AdminLogs";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b1a16]">
        <Routes>
          {/* 🌐 Public landing */}
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />

          {/* 🔓 Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
  path="/admin/users"
  element={
    <AdminRoute>
      <AdminUsers />
    </AdminRoute>
  }
/>
<Route
  path="/admin/analytics"
  element={
    <AdminRoute>
      <AdminAnalytics />
    </AdminRoute>
  }
/>
<Route
  path="/admin/logs"
  element={
    <AdminRoute>
      <AdminLogs />
    </AdminRoute>
  }
/>

          {/* 🔒 Protected */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>} />
          <Route path="/health" element={<PrivateRoute><Health /></PrivateRoute>} />
          <Route path="/finance" element={<PrivateRoute><Finance /></PrivateRoute>} />
          <Route path="/library" element={<PrivateRoute><Library /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><Add /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
