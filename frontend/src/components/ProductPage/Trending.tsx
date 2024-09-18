import React, { useState, useEffect } from 'react';
import { Field, MaxOut, TextArea, TwinsCol } from './StyledProducts';
import StyledGrid from './StyledGrid';
import SortByButton from './SortByButton';
import { products } from './product';


const Trending: React.FC = () => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

   // Sort and filter products based on the option selected
   const sortProducts = (sortOption: string) => {
    let sortedArray = [...products];


    const getNumericPrice = (price: string) => {
      return parseFloat(price.replace(/[^\d.]/g, '')); // Removes non-numeric characters
    };

    switch (sortOption) {
      case 'highPrice':
        // Find the product with the highest price
        const highestPricedProduct = sortedArray.reduce((prev, current) =>
          getNumericPrice(prev.price) > getNumericPrice(current.price) ? prev : current
        );
        setSortedProducts([highestPricedProduct]); // Set only the highest priced product
        break;
      case 'lowPrice':
        // Find the product with the lowest price
        const lowestPricedProduct = sortedArray.reduce((prev, current) =>
          getNumericPrice(prev.price) < getNumericPrice(current.price) ? prev : current
        );
        setSortedProducts([lowestPricedProduct]); // Set only the lowest priced product
        break;
        // Find the most recent product
      case 'mostRecent':
        sortedArray.sort((a, b) => new Date(b.date).getTime() -  new Date (a.date).getTime());
        setSortedProducts(sortedArray);
        break;
      //  Find the highest reated product
      case 'highestRated':
        sortedArray.sort((a, b) => b.rating - a.rating); 
        setSortedProducts(sortedArray);
        break;

      default:
        setSortedProducts(sortedArray); // Default behavior (show all products)
        break;
    }
  };

// To return the user to all the products after sorting
  const showAllProducts = () => {
    setSortedProducts(products);
  }

  // Search for products based on searchTerm
  const filterProductsBySearch = (searchTerm: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedProducts(filtered);
  };

  // Handle search term changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProductsBySearch(value);
  };

  // Handle sorting based on sort option
  const fetchSortedProducts = (sortOption: string) => {
    sortProducts(sortOption); 
  };

  useEffect(() => {
    sortProducts('mostRelevant'); // Default sorting
  }, []);

  return (
    <TwinsCol>
      <MaxOut>
        <TextArea
          type="text"
          placeholder="Search for an item"
          value={searchTerm}
          onChange={handleSearchChange} // Handle search input
        />
        <SortByButton onSort={fetchSortedProducts} />
      </MaxOut>
      <Field>
        <legend>
          <h2>TRENDING SALES</h2>
        </legend>
        <a href="/product-list">
          <StyledGrid products={sortedProducts} />
        </a>
      </Field>
      <button onClick={showAllProducts}>Show All Products</button>
    </TwinsCol>
  );
};

export default Trending;














// import React, { useState, useEffect } from 'react';
// import { Field, MaxOut, StyledInput, TwinsCol} from './StyledProducts';
// import StyledGrid from './StyledGrid';
// import SortByButton from './SortByButton';
// import { products } from './product';



// const Trending: React.FC = () => {
//   const [sortedProducts, setSortedProducts] = useState(products);

//   const fetchSortedProducts = async (sortOption: string) => {
//     try {
//       const response = await fetch(`/api/products?sort=${sortOption}`);
//       if (!response.ok) {
//         throw new Error('No Network response');
//       }
//       const data = await response.json();
//       setSortedProducts(data);
//     } catch (error) {
//       console.error('Error fetching sorted products:', error);
//     }
//   };


//   useEffect(() => {
//     fetchSortedProducts('mostRelevant'); // Default sort option
//   }, []);

//   return (
//     <TwinsCol>
//       <MaxOut>
//         <StyledInput type="text" placeholder="Search for an item" />
//         <SortByButton onSort={fetchSortedProducts} />
//       </MaxOut>
//       <Field>
//         <legend>
//           <h2>TRENDING SALES</h2>
//         </legend>
//         <a href="/product-list">
//         <StyledGrid products={sortedProducts} />
//         </a>
//       </Field>
//     </TwinsCol>
//   );
// };

// export default Trending;
