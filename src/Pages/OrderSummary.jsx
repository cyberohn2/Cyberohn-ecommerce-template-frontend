import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const OrderSummary = () => {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.amount, 0);

  const handleRemoveItem = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2 h-fit">
        <div className="bg-white p-8 rounded-4xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
          {cart.length > 0 ? (
            <div>
              <ul className="mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-2 mb-2">
                    <div className="flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md" />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.amount} x ₦{item.price} = ₦{item.amount * item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <p className="text-lg font-bold">Total: ₦{totalPrice}</p>
                <button className="mt-4 px-6 py-2 bg-[var(--yellow)] text-white rounded-lg hover:bg-yellow-600 cursor-pointer">
                  <Link to='/checkout'>Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </main>
      <aside className="grid grid-cols-1 gap-2">
        <Contact />
      </aside>
    </div>
  );
};

export default OrderSummary;