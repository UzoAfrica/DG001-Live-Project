// src/components/OrdersPage.styles.ts
import styled from 'styled-components';

export const OrdersContainer = styled.div`
  padding: 20px;
`;

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #e04f16;
    color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #28a745;
    color: white;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

export const SearchOrdersBox = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    background-color: white;
    border-radius: 5px;
    padding: 5px 10px;
    color: #e04f16;

    input {
        border: none;
        outline: none;
        margin-left: 5px;
    }
`;

export const SimilarProductsSection = styled.div`
  margin-top: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;
`;

export const ProductItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    background-color: antiquewhite;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductDetails = styled.div`
  text-align: left;
  width: 100%;
`;

export const ProductName = styled.h2`
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  margin: 5px 0;
`;

export const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: #0f600f;
`;
