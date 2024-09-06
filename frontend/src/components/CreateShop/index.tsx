// import NavBar from './NavBar';
import { Container } from './styles/index';
import MultiStepForm from './MultiStepForm';

const CreateShop = () => {
  return (
    <>
      <Container $width="100%" className="create-shop">
        <Container
          $display="flex"
          $flexDirection="column"
          $alignItems="center"
          $padding="0 1rem"
          $boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.1)"
          $position="sticky"
          $top="0px"
          $backgroundColor="white"
          className="navbar-container"
        >
          {/* <NavBar /> */}
        </Container>

        <Container
          $display="flex"
          $flexDirection="column"
          $alignItems="center"
          $padding="0 1rem"
          className="create-shop-body-container"
        >
          <MultiStepForm></MultiStepForm>
        </Container>
      </Container>
    </>
  );
};

export default CreateShop;
 