//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts, getMyProducts } from '../../services/productService.ts'; //imports and makes api call to fetch list of products
import './StyledProductList.tsx';
import { showErrorToast } from '../utils/toastify.ts';
import { useNavigate } from 'react-router-dom';
import {
  ProductCard,
  ProductButton,
  ProductDescription,
  ProductImage,
  ProductListContainer,
  ProductPrice,
  ProductTitle,
} from './StyledProductList.tsx';
import { getMyShops } from '../../axiosFolder/functions/shopFunction.ts';

interface Product {
  //type-check objects fields
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MyShops: React.FC = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const myShops = await getMyShops(localStorage.getItem('userId')!)
        console.log(myShops);
        setShops(myShops.data.shops);
        setLoading(false);
      } catch (error) {
        showErrorToast('Error fetching my shops');
        console.error('Error fetching my shops', error);
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
      {shops.map((shop) => (
        <ProductCard key={shop.id}>
          <ProductImage src={shop.imageUrls[0]} alt={shop.name} />
          <ProductTitle>{shop.name}</ProductTitle>
          <ProductDescription>{shop.description}</ProductDescription>
          <ProductButton onClick={() => navigate('/shop')}>
            See more
          </ProductButton>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default MyShops;
