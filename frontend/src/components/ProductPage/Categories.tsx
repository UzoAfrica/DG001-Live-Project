import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleCategories } from './StyledProducts.ts';

const categoriesOptions = [
  { label: 'Home appliances', value: 'home_appliances' },
  { label: 'Antiques', value: 'antiques' },
  { label: 'Furniture', value: 'furniture' },
  { label: 'Kids Clothes', value: 'kids_clothes' },
  { label: 'Adults Clothes', value: 'adults_clothes' },
];

const priceOptions = [
  { label: 'Less than 25,000', value: 'less_than_25000' },
  { label: '15,000 - 25,000', value: '15000_to_25000' },
  { label: '250 - 350', value: '250_to_350' },
];

const colorOptions = [
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
];

const ColorOption = styled.div`
  input[type="radio"]:checked + label {
    color: ${(props) => props.color};
  }
`;


export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <StyleCategories>
      <div>
        <h2>Categories</h2>
        <h4>Filters</h4>
      </div>

      <label>Deals</label>
      <div>
        {categoriesOptions.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name="category"
              value={option.value}
              checked={selectedCategory === option.value}
              onChange={() => setSelectedCategory(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>

      <label>Price</label>
      <div>
        {priceOptions.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name="price"
              value={option.value}
              checked={selectedPrice === option.value}
              onChange={() => setSelectedPrice(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>

      <label>Color</label>
      <div>
        {colorOptions.map((option) => (
            <div>
          <ColorOption key={option.value} color={option.value}>
            <input
              type="radio"
              id={option.value}
              name="color"
              value={option.value}
              checked={selectedColor === option.value}
              onChange={() => setSelectedColor(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </ColorOption>
            </div>
        ))}
      </div>
    </StyleCategories>
  );
}
