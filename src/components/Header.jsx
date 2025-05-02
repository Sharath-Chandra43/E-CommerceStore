import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext, useState } from 'react';
import MiniCart from './MiniCart';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">ShopZone</Link>
        <nav className="space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        </nav>
        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative text-gray-700 hover:text-blue-600"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          {showCart && <MiniCart onClose={() => setShowCart(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
