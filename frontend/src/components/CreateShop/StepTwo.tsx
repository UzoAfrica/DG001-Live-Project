import {
  Container,
  Paragraph,
  Label,
  UnorderedList,
  Input,
  LI,
  Image,
  TextArea,
} from './styles/Index';
import {
  StepTwoDesktopContainer,
  SecondDesktopContainer,
} from './styles/StepTwo';
import CameraSVG from '../../images/camera.svg';
import VideoCameraSVG from '../../images/videocam.svg';

const StepTwo = () => {
  return (
    <>
      <Container className="step-two">
        <Container $maxWidth="930px" $margin="0 auto" $padding="0.4rem">
          <Paragraph $fontSize="1.5rem" $fontWeight="500">
            Creating a listing
          </Paragraph>
          <Paragraph
            $margin="1rem 0 0 0"
            $fontSize="1.25rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Add some photos and details about your item. Fill out what you can
            for now—you'll be able to edit this later.
          </Paragraph>
        </Container>

        <Container
          $margin="1rem 0 0 0"
          $display="flex"
          $flexDirection="column"
          $rowGap="1.5rem"
          className="step-two-inputs-container"
        >
          <StepTwoDesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="step-two-photos-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="300px"
            >
              <Paragraph
                $fontSize="1.5rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Photos
              </Paragraph>

              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Add some aesthetic photos for your shop
              </Paragraph>
              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Tips:
              </Paragraph>
              <UnorderedList>
                <LI>Use natural light and no flash.</LI>
                <LI>Include a common object for scale.</LI>
                <LI>Show the item being held, worn, or used.</LI>
                <LI>Shoot against a clean, simple background.</LI>
                <LI>
                  Add photos to your variations so buyers can see all their
                  options.
                </LI>
              </UnorderedList>
            </Container>

            <Container
              $display="flex"
              $flexDirection="column"
              $alignItems="center"
              $rowGap="0.5rem"
              $width="62%"
              $border="1px solid rgba(0, 0, 0, 0.5)"
              $borderRadius="8px"
              $padding="10px 0"
              $maxWidth="300px"
            >
              <Image
                src={CameraSVG}
                alt="camera icon"
                width="117px"
                height="117px"
              />
              <Paragraph
                $fontSize="0.9rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Add a Photo
              </Paragraph>
            </Container>
          </StepTwoDesktopContainer>

          {/* Videos section */}
          <StepTwoDesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="step-two-videos-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="300px"
            >
              <Paragraph
                $fontSize="1.5rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Videos
              </Paragraph>

              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Add some Aesthetic Videos for your Shop
              </Paragraph>
              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Quick tips:
              </Paragraph>
              <UnorderedList>
                <LI>
                  Film wearable items on a model or show a functional item being
                  used.
                </LI>
                <LI>
                  Adjust your settings to record high resolution video—aim for
                  1080p or higher.
                </LI>
                <LI>
                  Crop your video after you upload it to get the right
                  dimensions.
                </LI>
              </UnorderedList>
            </Container>

            <Container
              $display="flex"
              $flexDirection="column"
              $alignItems="center"
              $rowGap="0.5rem"
              $width="62%"
              $border="1px solid rgba(0, 0, 0, 0.5)"
              $borderRadius="8px"
              $padding="10px 0"
              $maxWidth="300px"
            >
              <Image
                src={VideoCameraSVG}
                alt="camera icon"
                width="117px"
                height="117px"
              />
              <Paragraph
                $fontSize="0.9rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Add a Video
              </Paragraph>
            </Container>
          </StepTwoDesktopContainer>

          {/* Listing details */}
          <SecondDesktopContainer
            $display="flex"
            $flexDirection="column"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="listing-details-container"
          >
            {/* Title */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Paragraph $fontSize="1.5rem" $fontWeight="500">
                Listing details
              </Paragraph>
              <Paragraph
                $margin="1rem 0 0 0"
                $fontSize="1.25rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Tell the world all about your item and why they'll love it
              </Paragraph>

              <Label htmlFor="shop-title" $margin="4px 0 0 4px">
                Title*
                <Paragraph
                  $margin="0.8rem 0 0 0"
                  $fontSize="1rem"
                  $color="rgba(0, 0, 0, 0.5)"
                  $fontFamily="'Inter', sans-serif"
                >
                  Include keywords that buyers would use to search for your
                  item.
                </Paragraph>
              </Label>
              <Input
                type="text"
                name="shopTitle"
                id="shop-title"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Category */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shop-category" $margin="0 0 0 4px">
                Category*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Type a two- or three-word description of your item to get
                category suggestions that will help more shoppers find it.
              </Paragraph>

              <Input
                type="text"
                name="shopCategory"
                id="shop-category"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Description */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shop-description" $margin="0 0 0 4px">
                Description*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Start with a brief overview that describes your item's finest
                features. Shoppers will only see the first few lines of your
                description at first, so make it count!
              </Paragraph>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Not sure what else to say? Shoppers also like hearing about your
                process, and the story behind this item.
              </Paragraph>

              <TextArea
                type="textbox"
                name="shopDescription"
                id="shop-description"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></TextArea>
            </Container>
          </SecondDesktopContainer>

          {/* Shipping details */}
          <SecondDesktopContainer
            $display="flex"
            $flexDirection="column"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="shipping-details-container"
          >
            {/* Shipping address */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Paragraph $fontSize="1.5rem" $fontWeight="500">
                Shipping
              </Paragraph>
              <Paragraph
                $margin="1rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Give shoppers clear expectations about delivery time and cost by
                making sure your shipping info is accurate, including the
                shipping profile and your order processing schedule. You can
                make updates any time in Shipping settings.
              </Paragraph>

              <Label htmlFor="shippping-address" $margin="4px 0 0 4px">
                Shipping Address
              </Label>
              <Input
                type="text"
                name="shippingAddress"
                id="shipping-address"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Shipping Prices */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shipping-price" $margin="0 0 0 4px">
                Shipping Prices
              </Label>
              <Input
                type="text"
                name="shippingPrice"
                id="shipping-price"
                placeholder="NGN"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Shipping Services */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shipping-service" $margin="0 0 0 4px">
                Shipping services
              </Label>
              <Input
                type="textbox"
                name="shippingService"
                id="shipping-service"
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>
          </SecondDesktopContainer>
        </Container>
      </Container>
    </>
  );
};

export default StepTwo;
