import React from "react";
import "./index.css";
const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/56af/0089/fe8d1efaa4b7a200da6a6424b1b81bf9?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ULGBjdKA-9c5FN~8eNo1oI~ehLNi1mnrAqfUZ6IN4oVwGK5QDa5Ex-ZGavqYSRvD1rIMAobnCQip2hDGA0fG1t7EJij2agOCvZO-l-6UFx7lzgJleKpwaLRpiTF4C8~bjoErgMSvOlFm3c1Ss0co4uYTQdE8p4LIs~FIelf7WfTDlii-jpSSkZSZXQqW0zMr1KyI7YNX~NGYyNuouU0D8h4~F45oF0hMS1iwl5xbEe57cmiT4P-6fttXD02x46pEHC9EV94hKe4JqJB7Sf0d3BseUJZQgKWj-vVM7zdBxx~dshc1L0qWaTHKaTea4i6pteU~75CeA4NmfwDjU-vxjg__"
            alt="Logo"
          />
          <span>nonbor</span>
        </div>
        <div className="logo2">
          <img
            src="https://s3-alpha-sig.figma.com/img/4771/b693/5d590971ee4c255f87a5b0dfe0c6436d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SwKiezUT0OtQwpADBJhrUFawHJwjDXkX07KpgTAlu~7Ym4Q6~kADx~~qUmzXuGu4jARYF-MgBgvcjtdbN4WSX-DfdBBPlQNZZiD4xQwhEyTavsb21bx1oGEHmeq8VEUgQa7nFEWn7ZL1P-5RBYNUPu1NbW-mhVYdzQkuMcB1MRL-C0o-zUW6ijEH~Nh7S9B5iU0dwpdNC3eXEO-bFxCw-nhHgLgQFLlXZ22WWl0T2P9Bv7NsjFE3wmVAG2ypxcW8ubnihzCTQ-RnLBeKTJemHpkz7CmjP-tlNxFxAoRgGEj02cPU3JMVIotI4-rasszr-xmvbj~~LYJ-rm~MF9hP6g__"
            alt=""
          />
          <button onClick={() => window.close()}>
            <img
              src="https://s3-alpha-sig.figma.com/img/e854/0df7/6ea4436fc6847202c282f8235bd9afcb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DBkYo4L5eH371eBy0fSIiPQaWkWjvZAmwQv7gbW7RULMRvueid4GznE-c2yYLOHTe-kvOLFAMScTw5-MPfVgtTtLcPVgBBx9z-rBq5hGmfgJ8vxez--U42aDoSdKrBUWd779Di7Dss-QoFhlTblx5CCLXieNdzgo5LAe5Zhtp3m2fYY9gXthoe~TwTdOpI76tTf5CzSutco20xzQKgjT4raZTXpkMNVf-kGydsL1DQbFtTnPy5XP4g6yxt3X7AlxIqJYcnnkjjGYSMEHVwdV8121zWpn-bmaTOODHEaBOPzJajg-w4X1ti80Ofl8JLebFWO9YBIdT3ZZEwOpVKMf7w__"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
