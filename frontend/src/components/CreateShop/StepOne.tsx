import {
  Container,
  Paragraph,
  Label,
  Input,
  DesktopContainer,
  Select,
  Option,
} from './styles/Index';

const StepOne = () => {
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
                name="shopName"
                id="shop-name"
                placeholder="Your shop name"
                required
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
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
                $fontFamily="inherit"
              >
                <Option value="">Select</Option>
                <Option value="electronics">Electronics</Option>
                <Option value="clothing">Clothing</Option>
                <Option value="food">Food</Option>
                <Option value="others">Others</Option>
              </Select>
            </Container>
          </DesktopContainer>
        </Container>
      </Container>
    </>
  );
};

export default StepOne;
