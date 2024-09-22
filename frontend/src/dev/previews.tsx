import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import ProductList from '../components/ProductList.tsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Trending">
        <Trending />
      </ComponentPreview>
      <ComponentPreview path="/ProductList">
        <ProductList />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
