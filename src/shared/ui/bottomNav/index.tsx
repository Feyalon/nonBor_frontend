import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import "./styles.css";

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
        <Home size={24} color={isActive("/") ? "#007AFF" : "#ffffff"} />
        <span style={{ color: isActive("/") ? "#007AFF" : "#ffffff" }}>Asosiy</span>
      </NavLink>
      <NavLink to="/search" className={`nav-item ${isActive("/search") ? "active" : ""}`}>
        <Search size={24} color={isActive("/search") ? "#007AFF" : "#ffffff"} />
        <span style={{ color: isActive("/search") ? "#007AFF" : "#ffffff" }}>Qidiruv</span>
      </NavLink>
      <NavLink to="/cart" className={`nav-item ${isActive("/cart") ? "active" : ""}`}>
        <ShoppingCart size={24} color={isActive("/cart") ? "#007AFF" : "#ffffff"} />
        <span style={{ color: isActive("/cart") ? "#007AFF" : "#ffffff" }}>Savat</span>
      </NavLink>
      <NavLink to="/favorites" className={`nav-item ${isActive("/favorites") ? "active" : ""}`}>
        <Heart size={24} color={isActive("/favorites") ? "#007AFF" : "#ffffff"} />
        <span style={{ color: isActive("/favorites") ? "#007AFF" : "#ffffff" }}>Tanlanganlar</span>
      </NavLink>
      <NavLink to="/profile" className={`nav-item ${isActive("/profile") ? "active" : ""}`}>
        <User size={24} color={isActive("/profile") ? "#007AFF" : "#ffffff"} />
        <span style={{ color: isActive("/profile") ? "#007AFF" : "#ffffff" }}>Hisob</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;

