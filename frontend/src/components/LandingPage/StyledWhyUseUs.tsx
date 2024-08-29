import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  max-width: 1400px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  gap: 100px;

  span {
    color: coral;
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 100%;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const WomanImage = styled.img`
  width: 100%;
`;
