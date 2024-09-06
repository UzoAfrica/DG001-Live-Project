import styled from 'styled-components';
import { Container } from './index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AdditionalProps = Record<string, any>;

export const StepTwoDesktopContainer = styled(Container)<AdditionalProps>`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  /* Dektop screen */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 930px;
    margin: 0 auto;
    padding: 2rem;
    column-gap: 15px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const SecondDesktopContainer = styled(Container)<AdditionalProps>`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  /* Dektop screen */
  @media screen and (min-width: 768px) {
    max-width: 930px;
    margin: 0 auto;
    padding: 2rem;
    column-gap: 15px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;
 