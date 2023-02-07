import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // jei products naudojami map, tai pradine reiksme [] => empty array
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const transformData = (products) => {
    return products.map((product) => ({
      ...product,
      picUrl: JSON.parse(product.picUrl),
      size: JSON.parse(product.size),
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://testapi.io/api/lukasnvc/resource/NewEshop')
      .then((response) => {
        const transformedData = transformData(response.data.data);
        setProducts(transformedData);
      })
      .catch((error) => {
        setError('Could not find products');
        console.error('Products:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return <ProductContext.Provider value={{ products, isLoading, error }}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
