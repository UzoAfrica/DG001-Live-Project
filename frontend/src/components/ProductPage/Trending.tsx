import React, { useState, useEffect } from 'react';
import { Field, MaxOut, StyledInput, TwinsCol } from './StyledProducts';
import Grid from './StyledGrid';
import SortByButton from './SortByButton';
import { products } from './product';

const Trending: React.FC = () => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('mostRelevant');

  const fetchSortedProducts = async (sortOption: string) => {
    try {
      const response = await fetch(`/api/products?sort=${sortOption}&search=${searchTerm}`);
      if (!response.ok) {
        throw new Error('No Network response');
      }
      const data = await response.json();
      setSortedProducts(data);
    } catch (error) {
      console.error('Error fetching sorted products:', error);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchSortedProducts(sortOption);
  }, [searchTerm, sortOption]);

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TwinsCol>
      <MaxOut>
        <StyledInput
          type="text"
          placeholder="Search for an item"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SortByButton onSort={(option) => {
          setSortOption(option);
          fetchSortedProducts(option);
        }} />
      </MaxOut>
      <Field>
        <legend>
          <h2>TRENDING SALES</h2>
        </legend>
        <a href="/product-list">
          <Grid products={filteredProducts} />
        </a>
      </Field>
    </TwinsCol>
  );
};

export default Trending;









