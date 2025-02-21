import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../shared/hooks/useProduct';
import "./index.css"
const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id);
  console.log(id)
  console.log(product)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;
  return (


    <div className="product_details">
      <img className='product_details-image' src={product?.photoUrl} alt="" />
      <div className="product_details-content">
        <div className="product_details-title">{product?.name}</div>
        <div className='product_details-content-price'>
          <div className="product_content">
            {product?.oldPrice == null ? (
              <span className="price">{product?.price} so'm</span>
            ) : (
              <div className="product_content">
                <span className="old_price">{product?.oldPrice} so'm</span>
                <span className="price blue">{product?.price} so'm</span>
              </div>
            )}
          </div>
        </div>
        <div className="products_avaibility">
          <button className="product_details-availability product_blue">Mavjud</button>
          {
            product?.deliveryTime == null ? (
              <button className="product_details-availability ">0</button>
            ) : (
              <button className="product_details-availability">{product?.deliveryTime}</button>
            )
          }
        </div>
        <h3>
          Tavsif
        </h3>
        <p className="product_details-description">
          {
            product?.description
          }
        </p>
        <div className="product_details-button">
          <button>
            Savatcha
          </button>
        </div>
      </div>
    </div>


  );
};

export default ProductDetailsPage;

