import React from "react";
import { ShoppingCart } from "lucide-react";
import "./CartPage.css";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <h1>Savatda</h1>
      <div className="cart-empty">
        <div className="cart-icon">
          <img
            src="https://s3-alpha-sig.figma.com/img/a780/75e8/5bea33158cd644c768d3d5f9c3850f40?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bzxB-iCnadV1b0-Cp7W1ySt~gfGx3g5r02Royf57QMng8S~ezftxFP~zktuaFlET7oO3~HwXxE3uIcE5lBOeUZAFf0E6gM0ghelVYrgbKoP2BsSLClbiIiN0LWvTcD7PojwvwRfrksRXG49nKiDzIW3XWS9xm8I27WcOJZZP9oUisSLIKFb9Im5neICJtYrUDUTRZ~~Bc~nErynpOG4z-bdUWQUse-7HkrjMe5WiWJkCFlakBf39yX2l3tmuIQWQl9L9nOPnLNOB1ymLfl-nxxqhVz1S~wi2sZj~UNHP07RbGBTQrOyqBQKF-rK6X1J5RERhgkpT-B2jIR8bx-IhGQ__"
            alt=""
          />
        </div>
        <p className="empty-message">Hech narsa yo'q</p>
        <p className="empty-description">
          Savatga qo'shilgan mahsulotlar shu yerda paydo bo'ladi
        </p>
        <button className="start-shopping-btn">Rasmiylashtirish</button>
      </div>
    </div>
  );
};

export default CartPage;
