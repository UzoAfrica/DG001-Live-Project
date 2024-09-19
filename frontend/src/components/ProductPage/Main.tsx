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


// import Categories from './Categories';
// import { MainDiv } from './StyledProducts.ts';
// import Trending from './Trending';
//
// interface MainProps {
//   searchTerm: string;
// }
//
// const Main: React.FC<MainProps> = ({ searchTerm }) => {
//   return (
//     <MainDiv>
//       <Categories />
//       <Trending searchTerm={searchTerm} />
//     </MainDiv>
//   );
// };
//
// export default Main;







