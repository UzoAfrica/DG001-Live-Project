import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1100px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
    gap: 100px;

    span {
        color: #e04f16;
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
    margin-bottom: 20px;
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
