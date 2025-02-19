import React, { useState } from 'react';
import useProductCards from '../../../shared/hooks/useProductCards';
import SearchBar from './SearchBar';
import TagList from './TagList';
import ProductGrid from './ProductGrid';
import './styles.css';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { productCards, loading } = useProductCards();

  const filteredProducts = productCards.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="search-page">
      <br />
      <br />
      <h1 className="title">Qidiruv sahifasi</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TagList />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default SearchPage;
