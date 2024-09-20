import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import { showErrorToast } from '../utils/toastify';

// Product Interface
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { category, priceRange } = useParams();  // priceRange from URL

  // Function to parse price range from URL param
  const parsePriceRange = (priceRange: string) => {
    if (priceRange === 'less-than-25000') return { min: 0, max: 25000 };
    if (priceRange === '15000-25000') return { min: 15000, max: 25000 };
    return { min: 0, max: Infinity }; // Default range if no valid price range is found
  };

  // Fetch products and apply filtering based on category and price range
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();  // Fetch all products
        setLoading(false);
        setProducts(products);
      } catch (error) {
        showErrorToast('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();  // Fetch products when component mounts
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Determine the price range to filter by
  const { min, max } = parsePriceRange(priceRange || '');

  // Filter products based on category (if provided) and price range
  const filteredProducts = products
    .filter(product => {
      if (category) {
        return product.category.toLowerCase() === category;
      }
      return true;  // If no category, return all products
    })
    .filter(product => product.price >= min && product.price <= max);  // Apply price range filter

  return (
    <Container>
      <h1>
        Products: {category || 'All'} {priceRange ? `under ${max}` : ''}
      </h1>

      <ProductContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </ProductCard>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ProductContainer>
    </Container>
  );
}







// import { useParams } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Sofa', category: 'furniture' },
//   { id: 2, name: 'Dining Table', category: 'furniture' },
//   { id: 3, name: 'Kids T-shirt', category: 'kids_clothes' },
//   // Add more products
// ];

// export default function ProductCategory() {
//   const { category } = useParams(); // Get category from the URL

//   // Filter products based on the selected category
//   const filteredProducts = products.filter(product => product.category === category);

//   return (
//     <div>
//       <h2>Products for {category}</h2>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
