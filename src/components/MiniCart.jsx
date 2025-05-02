import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const MiniCart = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
      <div className="p-4 max-h-64 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-3">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-contain mr-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x ${item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border-t px-4 py-2">
        <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
        <div className="flex justify-between mt-2 space-x-2">
          <Link
            to="/cart"
            onClick={onClose}
            className="w-full text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
          >
            View Cart
          </Link>
          <button
            disabled
            className="w-full bg-gray-400 text-white py-1 rounded cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
