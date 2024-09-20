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
  text-align: center;
  margin-top: 3rem;
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
    color: #e04f16;
    font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const ViewMoreButton = styled.button`
  background-color: transparent;
  color: rgba(224, 79, 22, 1);
  border: 1px solid rgba(224, 79, 22, 1);
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: antiquewhite;
  }
`;

export const AddToCartButton = styled.button`
  background-color: transparent;
  color: rgba(224, 79, 22, 1);
  border: 1px solid rgba(224, 79, 22, 1);
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: antiquewhite;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 5px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
