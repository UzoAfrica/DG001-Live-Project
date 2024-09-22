//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts, getMyProducts} from '../../services/productService.ts'; //imports and makes api call to fetch list of products
import './StyledProductList.tsx';
import { showErrorToast } from '../utils/toastify.ts';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ProductCard,
  ProductButton,
  ProductDescription,
  ProductImage,
  ProductListContainer,
  ProductPrice,
  ProductTitle,
} from './StyledProductList.tsx';
import { getUserProducts } from '../../axiosFolder/functions/productFunction.ts';

interface Product {
  //type-check objects fields
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MyProducts: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { id } = useParams(); // priceRange from URL


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getUserProducts(id!);
        console.log(products);
        setProducts(products?.data);
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
          <ProductPrice>
            N{new Intl.NumberFormat('en-NG').format(product.price)}
          </ProductPrice>
          <ProductButton onClick={() => navigate(`/product/${product.id}`)}>
            See more
          </ProductButton>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default MyProducts;
