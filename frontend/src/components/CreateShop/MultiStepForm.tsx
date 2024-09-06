import { Container, Button, Form, DesktopContainer } from './styles/index';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react';

const steps = [
  'Name your Shop',
  'Stock your Shop',
  'How to get paid',
  'Shop Security',
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      default:
        return null;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('tried to submit form');
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
          onSubmit={handleFormSubmit}
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
              // type={currentStep === steps.length - 1 ? 'submit' : 'button'}
              className="form-button-right"
              onClick={handleNext}
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
 