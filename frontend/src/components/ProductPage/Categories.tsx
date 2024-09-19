import { useState } from 'react';
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
  { label: '250,000 - 350,000', value: '25000_to_35000' },
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

  return (
    <StyleCategories>
      <div>
        <h2>Categories</h2>
        <h4>Filters</h4>
      </div>

      <Dropdown>
        <DropdownButton>
          Deals
        </DropdownButton>
        <DropdownContent>
          {categoriesOptions.map((option) => (
            <DropdownItem key={option.value} onClick={() => setSelectedCategory(option.value)}>
              <input
                type="radio"
                id={option.value}
                name="category"
                value={option.value}
                checked={selectedCategory === option.value}
                onChange={() => setSelectedCategory(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownButton>
          Price
        </DropdownButton>
        <DropdownContent>
          {priceOptions.map((option) => (
            <DropdownItem key={option.value} onClick={() => setSelectedPrice(option.value)}>
              <input
                type="radio"
                id={option.value}
                name="price"
                value={option.value}
                checked={selectedPrice === option.value}
                onChange={() => setSelectedPrice(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownButton>
          Color
        </DropdownButton>
        <DropdownContent>
          {colorOptions.map((option) => (
            <DropdownItem key={option.value} onClick={() => setSelectedColor(option.value)}>
              <ColorOption color={option.value} isSelected={selectedColor === option.value}>
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
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    </StyleCategories>
  );
}