// src/pages/Products.js
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../CustomHook/useProducts';

const Products = () => {
  const { products, loading } = useProducts('https://fakestoreapi.com/products');

   const [searchQuery, setSearchQuery] = useState('');
  
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="p-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
