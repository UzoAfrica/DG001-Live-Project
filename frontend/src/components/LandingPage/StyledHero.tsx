import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-color: white;
  width: 100%;
`;

export const HeroText = styled.div`
  max-width: 50%;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const TradeSpan = styled.span`
    color: #e04f16;
`;

export const HeroImage = styled.div`
  img {
      width: 100%;
      height: auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  width: 80%;
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  flex-grow: 1;
  border-right: none;
`;

export const SearchButton = styled.button`
    height: 40px;
    background-color: #e04f16;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    padding: 0 10px;
    font-family: Outfit ;
    font-size: 16px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0 4px 4px 0;
    z-index: 1;

`;
