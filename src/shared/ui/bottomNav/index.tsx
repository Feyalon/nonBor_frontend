import React from "react";
import "./styles.css";
import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <a href="#" className="nav-item">
        <Home size={24} />
        <span>Asosiy</span>
      </a>
      <a href="#" className="nav-item">
        <Search size={24} />
        <span>Qidiruv</span>
      </a>
      <a href="#" className="nav-item">
        <ShoppingCart size={24} />
        <span>Savat</span>
      </a>
      <a href="#" className="nav-item">
        <Heart size={24} />
        <span>Tanlanganlar</span>
      </a>
      <a href="#" className="nav-item">
        <User size={24} />
        <span>Hisob</span>
      </a>
    </nav>
  );
};

export default BottomNav;
