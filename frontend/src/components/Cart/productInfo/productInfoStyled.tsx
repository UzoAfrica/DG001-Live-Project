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
  max-width: 40%;
  height: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px 0;
`;

export const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 20px;
  max-width: 600px;
  color: rgba(51, 51, 51, 0.5);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgba(51, 51, 51, 1);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2.3rem;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const WishlistButton = styled.button`
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

export const CartButton = styled(WishlistButton)`
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

export const SimilarProductsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;

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
  background-color: #45a049;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: antiquewhite;
    color: black;
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

/** Chika's Grid styling */
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
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    background-color: antiquewhite;
  }
`;

export const GridProductImage = styled.img`
  width: 100%;
  aspect-ratio: 18/13;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GridProductName = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

export const GridProductDescription = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
`;

export const GridProductPrice = styled.p`
  color: rgba(33, 150, 83, 1);
  font-weight: 700;
`;
