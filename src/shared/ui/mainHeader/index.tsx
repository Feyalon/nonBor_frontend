import React from "react";
import "./index.css"
import Header from "../header";

const MainHeader: React.FC = (): JSX.Element => {
  return (
    <div className="main_header">
      <Header />
      <div className="main_header_cotent">
        <h1>Barcha non va non mahsulotlari mavjud</h1>
      </div>
    </div>
  );
};
export default MainHeader;
