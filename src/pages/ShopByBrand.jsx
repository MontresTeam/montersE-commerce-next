import React from 'react'
import useProductFetching from '../hooks/useProduct';
import ProductPage from '../features/product/ProductPage';

const ShopByBrand = () => {
     const { data: products, isLoading, isError, error } = useProductFetching();
    
     if (isLoading) {
       return <div>Loading...</div>;
     }
  return (
    <div>
        <ProductPage products={products}/>
    </div>
  )
}

export default ShopByBrand