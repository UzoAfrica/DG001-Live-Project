import { Container, Image, Paragraph } from '../CreateShop/styles/Index';
import PlusSVG from '../../images/plus.svg';

const ShopHome = () => {
  return (
    <>
      <Container
        $width="100%"
        $margin="1.5rem 0 0 0"
        className="shop-home-container"
      >
        {/* Top container */}
        <Container>
          <Container $border="1px solid black" $borderRadius="5px">
            <Image src={PlusSVG} alt="plus" />
            <Paragraph> Add a photo </Paragraph>
          </Container>
          <Container>
            <Paragraph> Empress Ki Stores </Paragraph>
            <Container>
              <Image src={PlusSVG} alt="plus" />
              <Paragraph> Add a Short Description </Paragraph>
            </Container>
          </Container>
        </Container>
        {/* Botom container */}
        Shop home page
      </Container>
    </>
  );
};

export default ShopHome;
