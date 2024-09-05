import React, { useState, useEffect } from 'react';
import { Field, MaxOut, StyledInput, TwinsCol } from './StyledProducts';
import StyledGrid from './StyledGrid';
import SortByButton from './SortByButton';
import { products } from './product';

const Trending: React.FC = () => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const fetchSortedProducts = async (sortOption: string) => {
    try {
      const response = await fetch(`/api/products?sort=${sortOption}`);
      if (response.ok) {
        const data = await response.json();
        setSortedProducts(data);
      } else {
        throw new Error('No Network response');
      }
    } catch (error) {
      console.error('Error fetching sorted products:', error);
    }
  };

  useEffect(() => {
    fetchSortedProducts('mostRelevant'); // Default sort option
  }, []);

  return (
    <TwinsCol>
      <MaxOut>
        <StyledInput type="text" placeholder="Search for an item" />
        <SortByButton onSort={fetchSortedProducts} />
      </MaxOut>
      <Field>
        <legend>
          <h2>TRENDING SALES</h2>
        </legend>
        <StyledGrid products={sortedProducts} />
      </Field>
    </TwinsCol>
  );
};

export default Trending;
