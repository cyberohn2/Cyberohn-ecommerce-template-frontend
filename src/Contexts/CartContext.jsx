import productImage from "/hero-img.webp";
import coatedPeanott from "/coated-peanott.webp";
import peanottButter from "/peanott-butter.webp";
import peanottDough from "/peanott-doughnut.webp"
import { createContext, useEffect, useState } from 'react';

// Create a Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Global state for cart data
  const [products, setProducts] = useState([
        {
          img: productImage,
          name: "Peanott Milk",
          desc: "Healthy and nourishing groundnut milk.",
          price: 500,
        },
        {
          img: peanottButter,
          name: "Peanott Butter",
          desc: "Creamy and delicious peanut butter.",
          price: 1600,
        },
        {
          img: coatedPeanott,
          name: "Coated Peanott(25CL)",
          desc: "Crunchy and tasty peanut cookies.",
          price: 980,
        },
        {
          img: coatedPeanott,
          name: "Coated Peanott(50CL)",
          desc: "Crunchy and tasty peanut cookies.",
          price: 1800,
        },
        {
          img: coatedPeanott,
          name: "Coated Peanott(Plate Package)",
          desc: "Crunchy and tasty peanut cookies.",
          price: 400,
        },
        {
          img: peanottDough,
          name: "Peanott Doughnut",
          desc: "Soft delicious doughnut made with peanut butter filling.",
          price: 2500,
        },
      ]); // Global state for products data
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
