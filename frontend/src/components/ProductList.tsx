//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService'; //imports and makes api call to fetch list of products
import './StyledProductList.tsx';
import { showErrorToast } from './utils/toastify';
import { useNavigate } from 'react-router-dom';
import { ProductCard, ProductButton, ProductDescription, 
  ProductImage, ProductListContainer,
ProductPrice, ProductTitle } from './StyledProductList.tsx';

interface Product {
  //type-check objects fields
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        showErrorToast('Error fetching products');
        console.error('Error fetching products', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>N{new Intl.NumberFormat('en-NG').format(product.price)}</ProductPrice>
          <ProductButton onClick={() => navigate(`/product/${product.id}`)}>
            See more
          </ProductButton>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
