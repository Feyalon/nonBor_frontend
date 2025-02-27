import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./bottomNav";
import "./Layout.css"; // Добавьте этот импорт

const Layout: React.FC = () => {
  return (
    <div className="app">
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Layout;
