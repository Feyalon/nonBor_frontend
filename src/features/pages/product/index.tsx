import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import useProduct from "../../../shared/hooks/useProduct";
import { cartStore } from "../../../app/store/CartStore";
import "./index.css";
import { favoriteStore } from "../../../app/store/FavoriteStore";
import { Link } from "react-router";
const ProductDetailsPage: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id);

  const handleAddToCart = () => {
    if (product) {
      cartStore.addToCart(product);
    }
  };
  const handleAddToFavorites = () => {
    if (product) {
      favoriteStore.addToFavorites(product);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;

  return (
    <div className="product_details">
      <img className="product_details-image" src={product?.photoUrl} alt="" />
      <div className="product_details-content">
        <div className="product_details-title">{product?.name}</div>
        <div className="product_details-content-price">
          <div className="product_details_content">
            {product?.oldPrice == null ? (
              <span className="price">{product?.price} so'm</span>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <span className="old_price">{product?.oldPrice} so'm</span>
                <span className="price blue">{product?.price} so'm</span>
              </div>
            )}
            <button onClick={handleAddToFavorites}>
              <img
                src="/favorite.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="products_avaibility">
          <button className="product_details-availability product_blue">
            Mavjud
          </button>
          {product?.deliveryTime == null ? (
            <button className="product_details-availability ">0</button>
          ) : (
            <button className="product_details-availability">
              {product?.deliveryTime}
            </button>
          )}
        </div>
        <h3>Tavsif</h3>
        <p className="product_details-description">{product?.description}</p>

        <div className="product_details-button">
          {Number(product?.deliveryTime) === 0 ? (
            <p>No</p>
          ) : (
            <button onClick={handleAddToCart}>
              <Link to="/cart">Savatcha</Link>
            </button> 
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductDetailsPage;
