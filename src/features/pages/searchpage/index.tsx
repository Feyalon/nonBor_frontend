import React from 'react';
import useSearchProducts from '../../../shared/hooks/useSearchProducts';
import SearchBar from './SearchBar';
import TagList from './TagList';
import ProductGrid from './ProductGrid';
import './styles.css';
import { observer } from 'mobx-react';

const SearchPage: React.FC = observer(() => {
  const {
    searchTerm,
    setSearchTerm,
    isModalOpen,
    toggleModal,
    isAscending,
    toggleSortOrder,
    handleCategoryFilter,
    sortedProducts,
    loading,
    debouncedSearchTerm,
  } = useSearchProducts();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="search-page">
      <br />
      <br />
      <h1 className="title">Qidiruv sahifasi</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TagList onCategorySelect={handleCategoryFilter} />
      <div className="filter-buttons">
        <button className="filter-button" onClick={toggleSortOrder}>
          <img
            src="/sort.png"
            alt="Sort"
          />
          {isAscending ? "Saralash (A-Z)" : "Saralash (Z-A)"}
        </button>
        <button className="filter-button" onClick={toggleModal}>
          <img
            src="/filter.png"
            alt="Filter"
          />
          Filterlash
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Filter Options</h2>
            {/* Add filter options here */}
          </div>
        </div>
      )}
      {sortedProducts.length > 0 ? (
        <ProductGrid products={sortedProducts} searchTerm={debouncedSearchTerm} />
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
});

export default SearchPage;


