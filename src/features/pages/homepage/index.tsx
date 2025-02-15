import React from "react";
import MainHeader from "../../../shared/ui/mainHeader";
import Main from "../../../shared/ui/main";
import Header from "../../../shared/ui/header";
const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <Header />
      <MainHeader />
      <Main />
    </div>
  );
};

export default HomePage;
