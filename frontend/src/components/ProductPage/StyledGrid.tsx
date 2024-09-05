import styled from 'styled-components';
import { Component } from 'react';


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;
`;

const ProductItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductName = styled.h2`
  font-family: sans-serif;
  font-size: 1.2em;
  margin: 10px 5px;
`;

const ProductDescription = styled.p`
  font-family: sans-serif;
  font-size: 0.9em;
  color: #666;
`;

const ProductPrice = styled.p`
  font-family: sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: #0f600f;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class StyledGrid extends Component<{ products: any }> {
  render() {
    const { products } = this.props;
    return (
      <Grid>
        {products.map((product) => (
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
