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
  max-width: 500px;
  height: 300px;
  width: 300px;
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

export const StyledPaystackButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: black;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  /* Hover effect */
  &:hover {
    background-color: #45a049;
  }

  /* Disabled state */
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

export const ReviewsContainer = styled.div`
  width: 70%;

  .reviews-title {
    display: flex;
    justify-content: space-between;

    button {
      padding: 0.6rem;
      border-radius: 8px;
      font-weight: 600;
      color: white;
      background-color: rgba(224, 79, 22, 1);
      cursor: pointer;
    }
  }
  h3 {
    font-size: 24px;
  }
`;

export const AddReviewContainer = styled.div`
  margin: 1.5rem 0;
  transition:
    opacity 0.2s ease,
    margin-top 0.2s ease-out;

  &.open {
    opacity: 1;
    height: fit-content;
    margin-top: 0;
  }
  &.close {
    opacity: 0;
    height: 0;
    overflow: hidden;
    margin-top: -1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    button {
      padding: 0.6rem;
      border-radius: 8px;
      font-weight: 600;
      color: white;
      background-color: rgba(224, 79, 22, 1);
      width: 100%;
      max-width: 200px;
      margin: 0 auto;
      cursor: pointer;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
  }

  .input-container textarea,
  .input-container input {
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    padding: 12px 16px;

    &:focus-visible {
      outline: 1px solid #e04f16;
    }
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;

  .comment {
    margin-top: 0.5rem;
    color: rgba(51, 51, 51, 0.5);
  }

  .username {
    margin-top: 0.4rem;
    font-weight: 500;
  }

  .user-shop {
    font-size: 13px;
    color: rgba(51, 51, 51, 0.5);
    margin-top: 0.2rem;
  }

  .comment-date {
    font-size: 12px;
    color: rgba(140, 140, 161, 1);
    margin-top: 0.3rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
