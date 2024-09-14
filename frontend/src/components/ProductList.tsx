//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService'; //imports and makes api call to fetch list of products
import './ProductList.css';
import { showErrorToast } from './utils/toastify';
import { useNavigate } from 'react-router-dom';

interface Product {
  //type-check objects fields
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductList: React.FC = () => {
  //functional component
  const [products, setProducts] = useState<Product[]>([]); //initializes array
  const [loading, setLoading] = useState<boolean>(true); //updates state to true
  const navigate = useNavigate(); 

  useEffect(() => {
    //Hook to perform side effects
    const fetchProducts = async () => {
      //fetching logic
      try {
        const products = await getProducts(); //get products from product service
        setProducts(products);
        setLoading(false); //on success, updates products and sets to false
      } catch (error) {
        //error handling and logs to console, sets loading to false
        showErrorToast('Error fetching products');
        console.error('Error fetching products', error);
        setLoading(false);
      }
    };

    fetchProducts(); //calls within useEffect to fetch when component mounts
  }, []);

  if (loading) {
    //checks, if true displays loading message
    return <div>Loading...</div>;
  }

  return (
    //renders productList, if false returns jsx to render
    <div className="product-list">
      {products.map(
        (
          product //maps over products array & renders each product
        ) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${Number(product.price).toFixed(2)}</p>
            <button type="button" className='product-button' onClick={() => {
              navigate(`/product/${product.id}`)
            }}>See more</button>
          </div>
        )
      )}
    </div>
  );
};

export default ProductList;
