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
    max-width: 930px;
    justify-content: space-between;
    /* margin: 0 auto; */
    margin: 0 auto 2.5rem auto;
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
  text-align: ${(props) => props.$textAlign || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  max-width: ${(props) => props.$maxWidth || ''};
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

    &:focus-visible {
        outline: 1px solid #e04f16;
    }
`;

// General purpose <label> element
export const Label = styled.label<AdditionalProps>`
  color: ${(props) => props.$color || ''};
  font-size: ${(props) => props.$fontSize || ''};
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  margin: ${(props) => props.$margin || ''};
`;

// General purpose <input> element
export const Input = styled.input<AdditionalProps>`
  font-family: ${(props) => props.$fontFamily || "'Inter', sans-serif"};
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};
  max-width: ${(props) => props.$maxWidth || ''};
  height: ${(props) => props.$height || ''};

  &:focus-visible {
    outline: 1px solid #e04f16;
  }
`;

// General purpose <textarea> element
export const TextArea = styled.textarea<AdditionalProps>`
  font-family: ${(props) => props.$fontFamily || "'Inter', sans-serif"};
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};
  max-width: ${(props) => props.$maxWidth || ''};
  height: ${(props) => props.$height || ''};

  &:focus-visible {
    outline: 1px solid #e04f16;
  }
`;

// General purpose <select> element
export const Select = styled.select<AdditionalProps>`
  font-family: ${(props) => props.$fontFamily || "'Outfit', sans-serif"};
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};

  &:focus-visible {
    outline: 1px solid #e04f16;
  }
`;

// General purpose <option> element
export const Option = styled.option<AdditionalProps>`
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};
`;

// General purpose <ul> element
export const UnorderedList = styled.ul<AdditionalProps>`
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || ''};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};
  color: ${(props) => props.$color || 'rgba(0, 0, 0, 0.5)'};
`;
// General purpose <ul> element
export const LI = styled.li<AdditionalProps>`
  font-size: ${(props) => props.$fontSize || ''};
  padding: ${(props) => props.$padding || ''};
  margin: ${(props) => props.$margin || '0 0 0 28px'};
  border: ${(props) => props.$border || ''};
  border-radius: ${(props) => props.$borderRadius || ''};
  width: ${(props) => props.$width || ''};
  list-style-type: disc;
`;
