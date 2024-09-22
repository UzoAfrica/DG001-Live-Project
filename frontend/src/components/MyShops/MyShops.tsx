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
  const [shops, setShops] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyShops = async () => {
      try {
        const myShops = await getMyShops(localStorage.getItem('userId')!);
        // const myShops = await getMyShops(
        //   '171a9133-e8de-4641-961c-1badf7ebdf09'
        // );
        setShops(myShops.data.shops);
        setLoading(false);
      } catch (error) {
        showErrorToast('Error fetching my shops');
        console.error('Error fetching my shops', error);
        setLoading(false);
      }
    };

    fetchMyShops();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // shops.length == 0 ? () : ()
    shops.length === 0 ? (
      <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
        You have not created any shops
      </h3>
    ) : (
      <ProductListContainer>
        {shops.map((shop) => (
          <ProductCard key={shop.id}>
            <ProductImage src={shop.imageUrls[0]} alt={shop.name} />
            <ProductTitle>{shop.name}</ProductTitle>
            <ProductDescription>{shop.description}</ProductDescription>
            <ProductButton onClick={() => navigate(`/shop/${shop.id}`)}>
              Go to shop
            </ProductButton>
          </ProductCard>
        ))}
      </ProductListContainer>
    )
  );
};

export default MyShops;
