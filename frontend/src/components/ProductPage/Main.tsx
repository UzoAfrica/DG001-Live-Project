import Categories from './Categories';
import { MainDiv } from './StyledProducts.ts';
import Trending from './Trending';

export default function Main() {
  return (
    <>
      <MainDiv>
        <Categories />
        <Trending />
      </MainDiv>
    </>
  );
}
