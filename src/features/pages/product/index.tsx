import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../shared/hooks/useProduct';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;
  return (
    <div className="mainRecommendation">
      <div className="main-content-wrapper">
        <h1>Mahsulotlar</h1>
        <div className="product-details">
          <img
            src={"https://s3-alpha-sig.figma.com/img/3"}
            alt="product"
          />
          <div className="product-details-content">
            <h2>{product?.name}</h2>
            <p>{product?.price}</p>
            <button>Savatchaga qo'shish</button>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

