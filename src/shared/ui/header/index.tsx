import React from "react";
import "./index.css";
const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="logo">
          <img
            src="/logo.png"
            alt="Logo"
          />
          <span>nonbor</span>
        </div>
        <div className="logo2">
          <img
            src="/chat.png"
            alt=""
          />
          <button onClick={() => window.close()}>
            <img
              src="/cancel.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
