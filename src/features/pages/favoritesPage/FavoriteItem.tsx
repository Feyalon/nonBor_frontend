import React from "react";
import { Product } from "../../../shared/types/product";
import { cartStore } from "../../../app/store/CartStore";
import { favoriteStore } from "../../../app/store/FavoriteStore";
const FavoriteItem: React.FC<Product> = ({
  productId,
  name,
  price,
  photoUrl,
}) => {
  const product = {
    productId,
    name,
    price,
    photoUrl,
  };
  const handleAddToCart = () => {
    if (product) {
      cartStore.addToCart(product);
    }
  };
  const handleRemoveFromFavorites = () => {
    if (product) {
      console.log(product.name);
      favoriteStore.removeFromFavorites(product.name);
    }
  };

  return (
    <div className="favorite-item">
      <img src={photoUrl} alt={name} />
      <div className="favorite-item-details">
        <h2>{name}</h2>
        <p>{price} UZS</p>
      </div>

      <div className="favorite-stick-list">
        <button onClick={
          handleRemoveFromFavorites
        }>
          <img
            src="/favorite.png"
            alt=""
            style={
              {
                width: "100%",
                height: "100%",
              } as React.CSSProperties
            }
          />
        </button>
        <br />
        <button onClick={
          handleAddToCart
        }>
          <img
            src="https://s3-alpha-sig.figma.com/img/d791/8e4c/2111724f33e97a2d2e1764de79b21887?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hEt54aGB55lz7sYzmlv-SCyx2~jc-MqPJwx4ztEXn0VYW-gIzy~wi24V12a1sCzMS81-r9-OEX0Oc8sDZ4VKc0RXrk10unK81mbD8xv0E9uQFtBkOE-bTQ0fDtsMIYP154GGxMTvzwTzTJ5ApgOV-GvUC9LVilJKg5zu6IBzVZNHQVnebAAGr9kjM-dtiI5wEBwsrqgjvxEWT8FSeYVnQ7zkn45nrGWFmsvwCJDrrvpLvc0~ah0p-o9m9gM8Qjo6-f6ioroTtLwtWuWvd9igPv9bq0-QCtds-i5mnEO0x-hc-xtbYTuGSvstc4nd3fdubAX5BmDxbTWmFfJJFrSlaA__"
            alt=""
            style={
              {
                width: "100%",
                height: "100%",
              } as React.CSSProperties
            }
          />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
