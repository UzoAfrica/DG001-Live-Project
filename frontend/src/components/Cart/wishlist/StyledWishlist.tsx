import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #222;
`;

export const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WishlistItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #d35d2c;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewMoreButton = styled.button`
  background-color: #d35d2c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #bf4c22;
  }
`;
