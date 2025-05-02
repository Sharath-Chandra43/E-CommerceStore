import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);;

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition ">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-2 transform transition duration-300 hover:scale-105 cursor-pointer"
      />
      <h3 className="font-semibold text-center text-sm mb-1">{product.title}</h3>
      <p className="text-lg font-bold mb-2 text-green-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
