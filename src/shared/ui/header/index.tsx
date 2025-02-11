import React from "react";
import "./index.css"
const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="logo">
          <img src="/logoX.png" alt="Logo" />
          <span>nonbor</span>
        </div>
        {/* Add any other header elements here */}
      </div>
    </header>
  );
};
export default Header;
