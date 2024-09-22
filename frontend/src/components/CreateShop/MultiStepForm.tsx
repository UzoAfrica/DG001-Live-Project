import { Container, Button, Form, DesktopContainer } from './styles/Index';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createShop } from '../../axiosFolder/functions/shopFunction';
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import { addProduct } from '../../axiosFolder/functions/productFunction';

const steps = [
  'Name your Shop',
  'Stock your Shop',
  'How to get paid',
  'Shop Security',
];

export type FormDataType = {
  [key: string]: string | number | boolean | Array<string> | File;
};
export type SetFormDataType = (shopFormData: FormDataType) => void;

export type handleShopInputChangeType = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => void;

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [shopFormData, setShopFormData] = useState({
    name: '',
    isOpen: true,
    description: 'One-stop shop for all your needs!',
    currency: '',
    category: '',
    shopAddress: 'Lagos',
    securityFeatures: 'CCTV',
    country: '',
    street: '',
    state: '',
    shippingAddress: 'Worldwide',
    shippingPrices: '',
    shippingServices: '',
    zip: '',
    UserId: JSON.parse(localStorage.getItem('user')!).id,
  });
  const [productFormData, setProductFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: 1,
    userId: JSON.parse(localStorage.getItem('user')!).id,
    shopId: '',
    isAvailable: true,
    image: '',
    category: '',
    color: '',
  });

  // Handle shop input changes
  const handleShopInputChange: handleShopInputChangeType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShopFormData({
      ...shopFormData,
      [name]: value,
    });
  };

  // Handle product input changes
  const handleProductInputChange: handleShopInputChangeType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductFormData({
      ...productFormData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      // Send request to create shop
      const createShopResponse = await createShop(shopFormData)!;
      if (createShopResponse.status !== 201) {
        return showErrorToast(createShopResponse.data.message);
      }
      showSuccessToast(createShopResponse.data.message);
      const createdShop = createShopResponse.data.shop;
      localStorage.setItem(
        'createdShop',
        JSON.stringify(createShopResponse.data.shop)
      );

      // Update productFormData with the new shopId
      const updatedProductFormData = {
        ...productFormData,
        shopId: createdShop.id,
      };

      // Send request to create product
      const addProductResponse = await addProduct(updatedProductFormData)!;
      if (addProductResponse.status !== 201) {
        return showErrorToast(addProductResponse.data.message);
      }
      showSuccessToast(addProductResponse.data.message);
      localStorage.setItem(
        'createdProduct',
        JSON.stringify(addProductResponse.data.product)
      );

      // Redirect to shop page
      return navigate(`/shop/${addProductResponse.data.product.id}`);
    } catch (error) {
      console.error('Error in form submission:', error);
      showErrorToast('An error occurred while creating your shop and product.');
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (
        shopFormData.name === '' ||
        shopFormData.category === '' ||
        shopFormData.currency === ''
      ) {
        return showErrorToast('all fields are required');
      }
    }
    if (currentStep === 1) {
      if (
        productFormData.image === '' ||
        productFormData.category === '' ||
        productFormData.name === '' ||
        productFormData.price === '' ||
        productFormData.color === '' ||
        productFormData.description === ''
      ) {
        return showErrorToast('all fields are required');
      }
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Logic to render appropriate shop creation step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepOne
            shopFormData={shopFormData}
            handleShopInputChange={handleShopInputChange}
          />
        );
      case 1:
        return (
          <StepTwo
            productFormData={productFormData}
            handleProductInputChange={handleProductInputChange}
            shopFormData={shopFormData}
            handleShopInputChange={handleShopInputChange}
            setProductFormData={setProductFormData}
          />
        );
      case 2:
        return (
          <StepThree
            shopFormData={shopFormData}
            handleShopInputChange={handleShopInputChange}
          />
        );
      case 3:
        return <StepFour />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container
        $width="100%"
        $margin="1.5rem 0 0 0"
        className="multistep-form-container"
      >
        {/* Progress Bar */}
        <ProgressBar step={currentStep} steps={steps} />

        <Form
          $display="flex"
          $flexDirection="column"
          $rowGap="2rem"
          className="multistep-form"
          onSubmit={handleSubmit}
        >
          {/* Individual steps */}
          {/* Render individual steps here */}
          {renderStep()}

          {/* Buttons */}
          <DesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $margin="0 auto 1rem auto"
            className="form-buttons-container"
          >
            <Button
              type="button"
              className="form-button-left"
              onClick={handlePrevious}
              $padding="0.65rem 2.2rem"
              $border="1px solid #E04F16"
              $borderRadius="5px"
              $fontWeight="500"
              $fontSize="1rem"
              $backgroundColor="transparent"
              $color="#E04F16"
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="form-button-right"
              onClick={
                currentStep === steps.length - 1 ? handleSubmit : handleNext
              }
              $padding="0.65rem 2.2rem"
              $borderRadius="5px"
              $fontWeight="500"
              $fontSize="1rem"
              $backgroundColor="#E04F16"
              $color="white"
            >
              {currentStep === steps.length - 1
                ? 'Open your Shop'
                : 'Save and continue'}
            </Button>
          </DesktopContainer>
        </Form>
      </Container>
    </>
  );
};

export default MultiStepForm;
