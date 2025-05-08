import { createContext, useState } from 'react';

// Create a Cart Context
export const ProductContext = createContext();

// Cart Provider Component
export const ProductProvider = ({ children }) => {
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
        img: coatedPeanott,
        name: "Peanott Doughnut",
        desc: "Soft delicious doughnut made with peanut butter filling.",
        price: 2500,
      },
    ]); 


  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
