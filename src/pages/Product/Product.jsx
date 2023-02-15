import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { useProducts } from '../../hooks/products';
const Product = () => {
  const { productId } = useParams();

  const { data, isLoading, error } = useProducts();
  const products = data || [];

  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }
  return <div>Product {product?.name}</div>;
};

export default Product;
