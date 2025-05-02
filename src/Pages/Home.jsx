// src/pages/Home.js
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import useProducts from '../CustomHook/useProducts';


const Home = () => {
  const { products,loading } = useProducts('https://fakestoreapi.com/products?limit=4');

 

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }



  return (
    <div>
      <Hero />

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Products
          </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;
