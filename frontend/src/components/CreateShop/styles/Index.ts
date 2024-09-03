import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AdditionalProps = Record<string, any>;

// General purpose <div> container
export const Container = styled.div<AdditionalProps>`
  width: ${(props) => props.$width || ''};
  max-width: ${(props) => props.$maxWidth || ''};
  height: ${(props) => props.$height || ''};
  display: ${(props) => props.$display || ''};
  flex-direction: ${(props) => props.$flexDirection || ''};
  justify-content: ${(props) => props.$justifyContent || ''};
  align-items: ${(props) => props.$alignItems || ''};
  background-color: ${(props) => props.$backgroundColor || ''};
  row-gap: ${(props) => props.$rowGap || ''};
  column-gap: ${(props) => props.$columnGap || ''};
  padding: ${(props) => props.$padding || ''};
  position: ${(props) => props.$position || ''};
  top: ${(props) => props.$top || ''};
  right: ${(props) => props.$right || ''};
  bottom: ${(props) => props.$bottom || ''};
  left: ${(props) => props.$left || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  text-align: ${(props) => props.$textAlign || ''};
  box-shadow: ${(props) => props.$boxShadow || ''};
  margin: ${(props) => props.$margin || ''};
`;
// Turn ordinary container to desktop container
export const DesktopContainer = styled(Container)<AdditionalProps>`
  /* Dektop screen */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 800px;
    justify-content: space-between;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;

// General purpose <image> element
export const Image = styled.img<AdditionalProps>`
  height: 100%;
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
`;

// General purpose <p> element
export const Paragraph = styled.p<AdditionalProps>`
  font-size: ${(props) => props.$fontSize || ''};
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  font-family: ${(props) => props.$fontFamily || "'Outfit', sans-serif"};
  color: ${(props) => props.$color || ''};
`;

// General purpose <form> element
export const Form = styled.form<AdditionalProps>`
  display: ${(props) => props.$display || ''};
  flex-direction: ${(props) => props.$flexDirection || ''};
  justify-content: ${(props) => props.$justifyContent || ''};
  align-items: ${(props) => props.$alignItems || ''};
  row-gap: ${(props) => props.$rowGap || ''};
  column-gap: ${(props) => props.$columnGap || ''};
  padding: ${(props) => props.$padding || ''};
  background-color: ${(props) => props.$backgroundColor || ''};
`;

// General purpose <button> element
export const Button = styled.button<AdditionalProps>`
  color: ${(props) => props.$color || ''};
  font-family: ${(props) => props.$fontFamily || "'Outfit', sans-serif"};
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  font-size: ${(props) => props.$fontSize || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  background-color: ${(props) => props.$backgroundColor || ''};
  padding: ${(props) => props.$padding || ''};
  max-width: ${(props) => props.$maxWidth || ''};
  width: ${(props) => props.$width || '288px'};

  &:hover {
    cursor: pointer;
  }

  /* Dektop screen */
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
