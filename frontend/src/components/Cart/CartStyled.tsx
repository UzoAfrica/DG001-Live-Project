import styled from "styled-components";

export const CartBackground = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box; /* Ensures padding is included in the element's width and height */

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const CartContainer = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; /* Ensures padding is included in the element's width and height */

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #222;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #222;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const EmptyCartMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #888;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CartItem = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  @media (max-width: 480px) {
    padding: 8px 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const ItemTitle = styled.td`
  flex: 1;
  padding: 0 10px;
  font-size: 14px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ItemPrice = styled.td`
  width: 100px;
  text-align: center;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ItemQuantity = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const QuantityButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 4px 8px;
  }
`;

export const Quantity = styled.span`
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #d35d2c;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CartFooter = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 480px) {
    align-items: center;
    margin-top: 15px;
  }
`;

export const TotalItems = styled.p`
  font-size: 16px;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const TotalAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column; /* Stack buttons on small screens */
    gap: 8px;
  }
`;

export const ClearCartButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #d35d2c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;
