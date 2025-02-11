import React from 'react';
import { useParams } from 'react-router-dom';
import useProductCards from '../../../shared/hooks/useProductCards';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { productCards, loading, error } = useProductCards();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("Product: ", productCards);

  const product = productCards.find(p => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="mainRecommendation">
      <div className="main-content-wrapper">
        <h1>Mahsulotlar</h1>
        <div className="product-details">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: {product.price} сум</p>
          <button>Savatga qo'shish</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;