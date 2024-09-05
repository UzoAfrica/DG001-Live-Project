import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const WishlistButton = styled.button`
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #e91e63;
  }
`;

export const CartButton = styled(WishlistButton)`
  background-color: #3f51b5;

  &:hover {
    background-color: #303f9f;
  }
`;

export const SimilarProductsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  text-align: center;

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
`;

export const SimilarProductItem = styled.div`
  display: inline-block;
  width: 200px;
  margin: 10px;
  text-align: center;
`;

export const SimilarProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;
