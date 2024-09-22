import { Container, Paragraph } from './styles/Index';
import { SecondDesktopContainer } from './styles/StepTwo';

const StepFour = () => {
  return (
    <>
      {/* Keep your shop safe */}
      <SecondDesktopContainer
        $display="flex"
        $flexDirection="column"
        $rowGap="1rem"
        $width="100%"
        $columnGap="1.5rem"
        className="step-four-container"
      >
        <Container
          $display="flex"
          $flexDirection="column"
          $rowGap="0.9rem"
          $width="100%"
        >
          <Paragraph $fontSize="1.5rem" $fontWeight="500" $textAlign="center">
            Keep your shop Safe
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Running an online shop comes with certain risks - your account could
            be compromised or your products copied. That's why we provide tools
            to help keep your shop secure. Enable these optional security
            features for greater protection:
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Two-factor authentication - Require an authentication code from your
            phone or email when logging in from a new device. Adds an extra
            layer of account security.
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            - Custom watermarking - Automatically add a semi-transparent
            watermark with your shop's logo to all product images. Makes it
            harder for others to copy your images.
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            - Shop insurance - Optional ShopProtect insurance starts at
            $9.99/month. Covers up to $20,000 in damages from account
            compromise, fraudulent orders, DMCA violations and more. The
            ultimate peace of mind.
          </Paragraph>
          <Paragraph
            $fontSize="1rem"
            $color="black"
            $fontFamily="'Inter', sans-serif"
          >
            Please enable any or all of these optional features to better secure
            your online shop from harm. We take the safety of your shop
            seriously and are here to help in any way we can. Contact us at
            support@shopsite.com with any security questions or concerns.
          </Paragraph>
        </Container>
      </SecondDesktopContainer>
    </>
  );
};

export default StepFour;
