import { useState } from 'react';
import styled from 'styled-components';
import { StyleCategories } from './StyledProducts.ts';
import { useNavigate } from 'react-router-dom';

const categoriesOptions = [
  { label: "electronics", value: "electronics" },
  { label: "fashion", value: "fashion" },
  { label: "children", value: "children" },
  { label: "adult", value: "adult" },
  // { label: 'Adults Clothes', value: 'adults_clothes' },
];

const priceOptions = [
  { label: 'Less than 25,000', value: 'less than 25000' },
  { label: '15,000 - 25,000', value: '15000 - 25000' },
  { label: '250 - 350', value: '250 - 350' },
];

const colorOptions = [
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
];

const Dropdown = styled.div`
  margin-bottom: 20px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
`;

const DropdownContent = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 5px;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ColorOption = styled.div<{ isSelected: boolean; color: string }>`
  input[type="radio"]:checked + label {
    color: ${(props) => props.color};
  }
  label {
    color: ${(props) => (props.isSelected ? props.color : 'black')}; // Change label color if selected
  }
`;

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [dropdownValue, setDropdownValue] = useState(''); 

  const navigate = useNavigate(); 

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    navigate(`/products/${category}`); 
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };

  return (
    <StyleCategories>
      <div>
        <h2>CATEGORIES</h2>
        <h4>Filters</h4>
      </div>

      <label>Deals</label>
      <div>
        {categoriesOptions.map((option) => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              name="category"
              value={option.value}
              checked={selectedCategory === option.value}
              // onChange={() => setSelectedCategory(option.value)}
              onChange={() => handleCategorySelect(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}

        {/* Dropdown after categories */}
        <select value={dropdownValue} onChange={handleDropdownChange}>
          <option value="">Show more</option>
          <option value="option1">Bags</option>
          <option value="option2">Knives</option>
        </select>
      </div>

      <label>Price</label>
      <div>
        {priceOptions.map((option) => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              name="price"
              value={option.value}
              checked={selectedPrice === option.value}
              onChange={() => handleCategorySelect(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}

        {/* Dropdown after price */}
        <select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="">Show more</option>
          <option value="option1">400</option>
          <option value="option2">1000</option>
        </select>
      </div>

      <label>Color</label>
      <div>
        {colorOptions.map((option) => (
          <ColorOption key={option.value} color={option.value}>
            <input
              type="checkbox"
              id={option.value}
              name="color"
              value={option.value}
              checked={selectedColor === option.value}
              onChange={() => handleCategorySelect(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </ColorOption>
        ))}

        {/* Dropdown after color */}
        <select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="">Show more</option>
          <option value="option1">Purple</option>
          <option value="option2">Pink</option>
        </select>
      </div>
    </StyleCategories>
  );
}