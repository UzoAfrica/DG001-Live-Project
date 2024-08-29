import styled from 'styled-components';

export const TrendingSalesSection = styled.section`
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SalesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SaleItem = styled.div`
  flex: 1 1 200px;
  text-align: center;
  background-color: whitesmoke;
  padding: 10px;
`;

export const SaleImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SaleText = styled.p`
  margin: 5px 0;
`;
