import styled from 'styled-components';

export const TrendingSalesSection = styled.section`
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
`;

export const SalesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
`;

export const SaleItem = styled.div`
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

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  border-radius: 4px;
`;

export const WriteUp = styled.div`
  p {
    margin: 5px 0;
  }
`;
