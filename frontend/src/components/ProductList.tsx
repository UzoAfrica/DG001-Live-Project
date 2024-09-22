//to fetch and display products
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import './StyledProductList.tsx';
import './ProductList.css';
import { showErrorToast } from './utils/toastify';
import { useNavigate } from 'react-router-dom';

import StyledGrid from '../components/ProductPage/StyledGrid.tsx';
import Categories from '../components/ProductPage/Categories';
import SortByButton from '../components/ProductPage/SortByButton';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  color?: string; // Optional color property
  rating?: number; // Optional rating property
  createdAt?: string; // Optional created date property
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({ category: '', color: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('mostRelevant');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setFilteredProducts(products); // Initialize filtered products
        setLoading(false);
      } catch (error) {
        showErrorToast('Error fetching products');
        console.error('Error fetching products', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    // Filter by category and color
    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.color) {
      updatedProducts = updatedProducts.filter(
        (product) => product.color === filters.color
      );
    }

    // Search functionality
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort functionality
    if (sortOption === 'highestRated') {
      updatedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'mostRecent') {
      updatedProducts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortOption === 'highPrice') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'lowPrice') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [filters, searchTerm, sortOption, products]);

  const handleFilterChange = (newFilters: {
    category: string;
    color: string;
  }) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToWishlist = (product: Product) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const existingProduct = wishlist.find(
        (item: Product) => item.id === product.id
      );

      if (existingProduct) {
        alert('Product is already in your wishlist!');
      } else {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Product added to wishlist!');
      }
    } catch (error) {
      alert('Error adding product to wishlist');
    }
  };

  const handleAddToCart = (product: Product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProduct = cart.find(
        (item: Product) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } catch (error) {
      alert('Error adding product to cart');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list-container">
      <div className="sidebar">
        <Categories onFilterChange={handleFilterChange} />
      </div>
      <div className="main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <SortByButton onSort={setSortOption} />
        </div>
        <h2 className="trending-sales-heading">Product List</h2>
        <StyledGrid
          products={filteredProducts}
          onAddToWishlist={handleAddToWishlist}
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick} // Pass the click handler
        />
      </div>
    </div>
  );
};

export default ProductList;
