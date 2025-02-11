import React, { useState } from 'react';
import { IProductItem } from '../../../shared/types/productItem';
import useProductCards from '../../../shared/hooks/useProductCards';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { productCards, loading, error } = useProductCards();

  const filteredProducts = productCards.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mainRecommendation">
      <div className="main-content-wrapper">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Qidiruv..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="main_content_productCards">
          {filteredProducts.map((product: IProductItem) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} сум</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;