import { useState, useEffect } from 'react';
import useProductCards from './useProductCards';

const useSearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const { productCards, loading } = useProductCards();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAscending, setIsAscending] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const fuzzySearch = (text: string, query: string) => {
    const pattern = query.split('').map(char => `(?=.*${char})`).join('');
    const regex = new RegExp(`${pattern}`, 'i');
    return regex.test(text);
  };

  const filteredProducts = productCards.filter((product) => {
    const matchesSearch = fuzzySearch(product.name.toLowerCase(), debouncedSearchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (isAscending) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return {
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
  };
};

export default useSearchProducts;