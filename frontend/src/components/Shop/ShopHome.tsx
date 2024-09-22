import {
  Button,
  Container,
  Image,
  LI,
  Paragraph,
  UnorderedList,
} from '../CreateShop/styles/Index';
import PlusSVG from '../../images/plus.svg';
import BlenderSVG from '../../images/blender.svg';
import { SecondDesktopContainer } from '../CreateShop/styles/StepTwo';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopHome = () => {
  const [shopPhoto, setShopPhoto] = useState<File | null>(null);
  const shopPhotoInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); 


  const handleShopPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setShopPhoto(event.target.files[0]);
    }
  };

  const triggerShopPhotoUpload = () => {
    shopPhotoInputRef.current?.click();
  };

  const createdShop = JSON.parse(localStorage.getItem('createdShop')!);
  const createdProduct = JSON.parse(localStorage.getItem('createdProduct')!);

  return (
    <>
      <Container
        $width="100%"
        $margin="1.5rem 0 0 0"
        $display="flex"
        $flexDirection="column"
        $rowGap="2rem"
        $padding="1rem"
        className="shop-home-container"
      >
        {/* Top container */}
        <Container
          $display="flex"
          $flexDirection="column"
          $alignItems="center"
          $rowGap="1rem"
          $width="100%"
          className="top-button-and-text-container"
        >
          <Container
            $border="1px solid black"
            $borderRadius="5px"
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            className="top-container-image-box"
            $width="70%"
            $padding="1rem"
            $maxWidth="275px"
            onClick={triggerShopPhotoUpload}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleShopPhotoChange}
              ref={shopPhotoInputRef}
              style={{ display: 'none' }}
            />
            {shopPhoto ? (
              <Image
                src={URL.createObjectURL(shopPhoto)}
                alt="Shop photo"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            ) : (
              <>
                <Image src={PlusSVG} alt="plus" />
                <Paragraph>Add a photo</Paragraph>
              </>
            )}
          </Container>
          <Container>
            <Paragraph>
              {' '}
              {createdShop ? createdShop.name : 'Empress Ki Stores'}{' '}
            </Paragraph>
          </Container>
        </Container>

        {/* Bottom container */}
        <SecondDesktopContainer
          $display="flex"
          $flexDirection="column"
          $rowGap="1rem"
          $width="100%"
          $columnGap="1.5rem"
          className="bottom-container"
        >
          <Container
            $display="flex"
            $flexDirection="column"
            $rowGap="0.5rem"
            $width="100%"
            $maxWidth="615px"
          >
            <Paragraph $fontSize="1.5rem" $fontWeight="500">
              Upload Images
            </Paragraph>

            <Paragraph
              $fontSize="1.3rem"
              $fontWeight="500"
              $margin="0.6rem 0 0 2px"
            >
              Photos
            </Paragraph>
            <Paragraph
              $fontSize="1rem"
              $color="rgba(0, 0, 0, 0.5)"
              $fontFamily="'Inter', sans-serif"
            >
              Add some aesthetic photos for your item
            </Paragraph>
            <Paragraph
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
            $rowGap="0.5rem"
            $width="100%"
            $maxWidth="615px"
            $padding="0 0.4rem"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              className="blender-container"
            >
              <Image
                src={createdProduct ? createdProduct.imageUrl[0] : BlenderSVG}
                alt="blender"
                width="220px"
                $border="1px solid #F2F2F2"
              ></Image>
              <Container>
                <Paragraph
                  $fontSize="1rem"
                  $fontFamily="Inter"
                  $border="1px solid #F2F2F2"
                  $maxWidth="220px"
                >
                  {createdProduct ? (
                    <>
                      {createdProduct.name}
                      <br />N {createdProduct.price}
                    </>
                  ) : (
                    <>
                      Blender
                      <br />N 20,000
                    </>
                  )}
                </Paragraph>
              </Container>
            </Container>
          </Container>
          <Button
            $padding="0.65rem 2.2rem"
            $border="1px solid #E04F16"
            $borderRadius="5px"
            $fontWeight="500"
            $fontSize="1rem"
            $backgroundColor="#E04F16"
            $color="white"
            className="form-button-left"
            type="button"
            onClick={ () => {navigate("/ProductList")} }
          >
            Go to products
          </Button>
        </SecondDesktopContainer>
      </Container>
    </>
  );
};

export default ShopHome;
