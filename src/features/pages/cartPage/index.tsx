import React from "react";
import { observer } from "mobx-react";
import { ShoppingCart } from "lucide-react";
import { cartStore } from "../../../app/store/CartStore";
import "./CartPage.css";
import { Link } from "react-router";

const CartPage: React.FC = observer(() => {
  const { cart } = cartStore;
  const removeFromCart = (name: string) => {
    cartStore.removeFromCart(name);
  };
  console.log(cart);
  return (
    <div className="cart-page">
      <h1>Savatda</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-icon">
            <img
              src="/cart.png"
              alt=""
            />
          </div>
          <p className="empty-message">Hech narsa yo'q</p>
          <p className="empty-description">
            Savatga qo'shilgan mahsulotlar shu yerda paydo bo'ladi
          </p>
          <Link to={"/"}>
            <button className="start-shopping-btn">Rasmiylashtirish</button>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.name}-${item.id}`} className="cart-item">
              <div className="cart-descriptions">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Narxi: {item.price} so'm</p>
                </div>
              </div>
              <div className="cart-item-buttons">
                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(item.name)}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1a0e/7995/338bb2a507e97d13c88ef60ee78d25f9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F8JsQifLxEj9aY51ZyMOR8Na4NjF7k83NTOgWnxnnmFgD~RxkOROXZt2c4LOyi4DRUOS4eKt5TC3TijJNPBayJWnyJTbvcrEDIfN~Rpy6iCmH9oxIEy0KyFIh~2kzsKCGnZaOsgiKzyLzSDNXVemcv~xyBE3fg~6tKdGcDNj4AR33J2BAPXiIl0jAD1-7TxNAhO5W8~vt2vxGYCquuQiuUiutePHDJ8t3vXED~8wXV4yh80uxpplYrMjJdYuVpX2YUdYIJHuGMtqaBLY7hXLNcZ52GvbkFoKLwqEt2V4TQg6sNmFjZnXOIeHTocfoc8MdUFGynhIJAvpAwE4Z6KekA__"
                    alt=""
                  />
                </button> 
              </div>
            </div>
          ))}
          <div className="cart-details-button">
            <div>
              <p>Jami</p>

              <p>{cart.reduce((sum, item) => sum + item.price, 0) + " so'm"}</p>
            </div>
            <button className="start-shopping-btn">Rasmiylashtirish</button>
          </div>
        </div>
      )}
    </div>
  );
});

export default CartPage;
