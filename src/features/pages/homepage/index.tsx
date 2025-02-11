import React from "react";
import MainHeader from "../../../shared/ui/mainHeader";
import Main from "../../../shared/ui/main";
import BottomNav from "../../../shared/ui/bottomNav";
import MainRecommendations from "../../../shared/ui/mainRecommendations";
const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="main">
        
      <MainHeader />
      <Main />
      {/* <MainRecommendations /> */}

      <BottomNav />
    </div>
  );
};
export default HomePage;
