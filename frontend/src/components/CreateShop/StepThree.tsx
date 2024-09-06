import { Container, Paragraph, Label, Input } from './styles/index';
import { SecondDesktopContainer } from './styles/StepTwo';

const StepThree = () => {
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
            name="streetAddress"
            id="street-address"
            placeholder="No"
            required
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
          <Label htmlFor="shipping-state" $margin="0 0 0 4px">
            State
          </Label>
          <Input
            type="textbox"
            name="shippingState"
            id="shipping-state"
            required
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
          <Label htmlFor="zip-code" $margin="0 0 0 4px">
            Zip Code
          </Label>
          <Input
            type="textbox"
            name="zipCode"
            id="zip-code"
            required
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
