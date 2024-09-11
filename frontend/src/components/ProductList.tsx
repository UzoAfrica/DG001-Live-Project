//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService'; //imports and makes api call to fetch list of products
import  './ProductList.css';

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
            {' '}
            //provides unique id to each product, identifies changes
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p> //product details
            <p>${product.price.toFixed(2)}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ProductList;
