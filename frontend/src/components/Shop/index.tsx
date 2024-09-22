// import NavBar from '../CreateShop/NavBar';
import { Container } from '../CreateShop/styles/Index';
import ShopHome from './ShopHome';

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
          className="shop-container"
        >
          <ShopHome></ShopHome>
        </Container>
      </Container>
    </>
  );
};

export default CreateShop;
