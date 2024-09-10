import React from 'react';
import { FormDataType, handleShopInputChangeType } from './MultiStepForm';
import {
  Container,
  Paragraph,
  Label,
  Input,
  DesktopContainer,
  Select,
  Option,
} from './styles/Index';

export type StepOneProps = {
  shopFormData: FormDataType;
  handleShopInputChange: handleShopInputChangeType;
};

const StepOne: React.FC<StepOneProps> = ({ shopFormData, handleShopInputChange }) => {
  return (
    <>
      <Container className="step-one">
        <Container>
          <Paragraph $fontSize="1.5rem" $fontWeight="500" $textAlign="center">
            Shop Preferences
          </Paragraph>
          <Paragraph
            $margin="1rem 0 0 0"
            $fontSize="1.25rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
            $textAlign="center"
          >
            Let's get started! Tell us more about your Shop
          </Paragraph>
        </Container>

        <Container
          $margin="1rem 0 0 0"
          $display="flex"
          $flexDirection="column"
          $rowGap="1.5rem"
          className="step-one-inputs-container"
        >
          <DesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="name-currency-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
            >
              <Label htmlFor="shop-name" $margin="0 0 0 4px">
                Name of Shop
              </Label>
              <Input
                type="text"
                name="name"
                id="shop-name"
                placeholder="Your shop name"
                required
                value={shopFormData.name}
                onChange={handleShopInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
            >
              <Label htmlFor="currency" $margin="0 0 0 4px">
                Currency
              </Label>
              <Input
                type="text"
                name="currency"
                id="currency"
                placeholder="NGN"
                required
                value={shopFormData.currency}
                onChange={handleShopInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>
          </DesktopContainer>

          <DesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="category-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
            >
              <Label htmlFor="category" $margin="0 0 0 4px">
                Category
              </Label>
              <Select
                name="category"
                id="category"
                required
                value={shopFormData.category}
                onChange={handleShopInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
                $fontFamily="inherit"
              >
                <Option value="">Select</Option>
                <Option value="ELECTRONICS">Electronics</Option>
                <Option value="FASHION">Fashion</Option>
                <Option value="FOOD">Food</Option>
                <Option value="HEALTH">Health</Option>
                <Option value="HOME">Home</Option>
                <Option value="SPORTS">Sports</Option>
                <Option value="CHILDREN">Children</Option>
                <Option value="OTHERS">Others</Option>
              </Select>
            </Container>
          </DesktopContainer>
        </Container>
      </Container>
    </>
  );
};

export default StepOne;
