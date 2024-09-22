import styled from 'styled-components';
// Container for the entire product list
export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 300px));
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9; // light background
  // justify-items: center

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

// Individual product card styling
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  height: auto;
  max-width: 500px;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    background-color: antiquewhite
  }
`;

// Image styling within the product card
export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: contain;
`;

// Product name/title styling
export const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;

// Product description styling
export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
`;

// Price styling with bold emphasis
export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
`;

// Button for product action
export const ProductButton = styled.button`
  background-color: coral;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkorange;
  }
`;





/* .product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
 

}

.product {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.product img {
  max-width: 100%;
  height: auto;
}

.product-button {
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 12px;
  background-color: #E04F16;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
} */