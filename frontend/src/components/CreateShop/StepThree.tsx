import { Container, Paragraph, Label, Input } from './styles/Index';
import { SecondDesktopContainer } from './styles/StepTwo';
import {StepOneProps} from './StepOne';

const StepThree: React.FC<StepOneProps> = ({ shopFormData, handleShopInputChange }) => {
  return (
    <>
      {/* Shipping details */}
      <SecondDesktopContainer
        $display="flex"
        $flexDirection="column"
        $rowGap="1rem"
        $width="100%"
        $columnGap="1.5rem"
        className="step-three-container"
      >
        {/* More about Business */}
        <Container
          $display="flex"
          $flexDirection="column"
          $rowGap="0.5rem"
          $width="100%"
          $maxWidth="615px"
        >
          <Paragraph $fontSize="1.5rem" $fontWeight="500">
            Tell us more about your business
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Tell the world all about your item and why they'll love it
          </Paragraph>

          <Paragraph
            $fontSize="1.5rem"
            $fontWeight="500"
            $margin="0.6rem 0 0 0"
          >
            Legal business addresss
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Tell the world all about your item and why they'll love it
          </Paragraph>

          {/* Country input */}
          <Label htmlFor="country" $margin="4px 0 0 4px">
            Country
          </Label>
          <Input
            type="text"
            name="country"
            id="country"
            required
            value={shopFormData.country}
            onChange={handleShopInputChange}
            $border="1px solid #D0D5DD"
            $borderRadius="8px"
            $padding="12px 16px"
          ></Input>
        </Container>

        {/* Street Address */}
        <Container
          $display="flex"
          $flexDirection="column"
          $rowGap="0.5rem"
          $width="100%"
          $maxWidth="615px"
        >
          <Label htmlFor="street-address" $margin="0 0 0 4px">
            Street Address
          </Label>
          <Input
            type="text"
            name="street"
            id="street-address"
            placeholder="No"
            required
            value={shopFormData.street}
            onChange={handleShopInputChange}
            $border="1px solid #D0D5DD"
            $borderRadius="8px"
            $padding="12px 16px"
          ></Input>
        </Container>

        {/* Shipping State */}
        <Container
          $display="flex"
          $flexDirection="column"
          $rowGap="0.5rem"
          $width="100%"
          $maxWidth="615px"
        >
          <Label htmlFor="state" $margin="0 0 0 4px">
            State
          </Label>
          <Input
            type="textbox"
            name="state"
            id="state"
            required
            value={shopFormData.state}
            onChange={handleShopInputChange}
            $border="1px solid #D0D5DD"
            $borderRadius="8px"
            $padding="12px 16px"
          ></Input>
        </Container>

        {/* Zip code */}
        <Container
          $display="flex"
          $flexDirection="column"
          $rowGap="0.5rem"
          $width="100%"
          $maxWidth="300px"
        >
          <Label htmlFor="zip" $margin="0 0 0 4px">
            Zip Code
          </Label>
          <Input
            type="textbox"
            name="zip"
            id="zip"
            required
            value={shopFormData.zip}
            onChange={handleShopInputChange}
            $border="1px solid #D0D5DD"
            $borderRadius="8px"
            $padding="12px 16px"
          ></Input>
        </Container>
      </SecondDesktopContainer>
    </>
  );
};

export default StepThree;
