import { Container, Button, Form, DesktopContainer } from './styles/Index';
// import StepOne from './StepOne';
// import StepTwo from './StepTwo';
// import StepThree from './StepThree';
import StepFour from './StepFour';
// import { useState } from 'react';

const MultiStepForm = () => {
  //   const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Container
        $width="100%"
        $margin="1.5rem 0 0 0"
        className="multistep-form-container"
      >
        <Form
          $display="flex"
          $flexDirection="column"
          $rowGap="2rem"
          className="multistep-form"
        >
          {/* Individual steps */}
          {/* <StepOne /> */}
          {/* <StepTwo /> */}
          {/* <StepThree /> */}
          <StepFour />

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
              $padding="0.65rem 2.2rem"
              $border="1px solid #E04F16"
              $borderRadius="5px"
              $fontWeight="500"
              $fontSize="1rem"
              $backgroundColor="transparent"
              $color="#E04F16"
              className="form-button-left"
            >
              Cancel
            </Button>
            <Button
              $padding="0.65rem 2.2rem"
              $borderRadius="5px"
              $fontWeight="500"
              $fontSize="1rem"
              $backgroundColor="#E04F16"
              $color="white"
              className="form-button-right"
            >
              Save and continue
            </Button>
          </DesktopContainer>
        </Form>
      </Container>
    </>
  );
};

export default MultiStepForm;
