import styled from 'styled-components';
import { Component } from 'react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;
`;

const ProductItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    background-color: antiquewhite;
  }
`;
//   border: 1px solid #ccc;
//   padding: 10px;
//   text-align: center;
// `;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductName = styled.h2`
  p {
    margin: 5px 0;
  }
  //font-family: sans-serif;
  //font-size: 1.2em;
  //margin: 10px 5px;
`;

const ProductDescription = styled.p`
  p {
    margin: 5px 0;
  }
  //font-family: sans-serif;
  //font-size: 0.9em;
  //color: #666;
`;

const ProductPrice = styled.p`
  p {
    margin: 5px 0;
  }
  //font-family: sans-serif;
  //font-size: 1em;
  //font-weight: bold;
  //color: #0f600f;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class StyledGrid extends Component<{ products: any }> {
  render() {
    const { products } = this.props;
    return (
      <Grid>
        {products.map((product: any) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductItem>
        ))}
      </Grid>
    );
  }
}

export default StyledGrid;
