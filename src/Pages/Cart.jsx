import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  // Accessing CartContext directly using useContext
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleDecreaseQuantity = (id, quantity) => {
    updateQuantity(id, quantity - 1);
  };

  const handleIncreaseQuantity = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain mb-2 md:mb-0 md:mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
            <button
              className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
