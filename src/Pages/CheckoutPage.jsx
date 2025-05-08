import React, { useState, useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import Contact from '../components/Contact';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, I would like to place an order:
- Full Name: ${formData.fullName}
- Address: ${formData.address}
- City: ${formData.city}
- State: ${formData.state}
- Postal Code: ${formData.postalCode}
- Phone Number: ${formData.phoneNumber}
- Items in Cart:
${cart
  .map(
    (item) =>
      `  - ${item.name}: ${item.amount} x ₦${item.price} = ₦${
        item.amount * item.price
      }`
  )
  .join('\n')}
- Total: ₦${cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    )}`;

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/2348028655703?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
      <main className="col-span-2 h-fit">
        <div className="bg-white p-8 rounded-4xl shadow-md max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[var(--yellow)] text-white rounded-lg hover:bg-yellow-600"
            >
              Submit and Make Payment
            </button>
          </form>
        </div>
      </main>
      <aside className="grid grid-cols-1 gap-2">
        <Contact />
      </aside>
    </div>
  );
};

export default CheckoutPage;