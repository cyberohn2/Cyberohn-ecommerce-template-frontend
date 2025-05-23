import plusIcon from "/icon-plus.svg";
import minusIcon from "/icon-minus.svg";
import { CartContext } from "../Contexts/CartContext";
import { useContext} from "react";
import { useLocation } from "react-router-dom";

const ProductList = ({title}) => {
  const { cart, setCart, products } = useContext(CartContext);
  const location = useLocation();


  // Function to update localStorage whenever the cart changes
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCart = (action, product) => {
      const existingProduct = cart.find((item) => item.name === product.name);
      let updatedCart;

      if (action === "increment") {
        if (existingProduct) {
          // Update the amount of the existing product
          updatedCart = cart.map((item) =>
            item.name === product.name
              ? { ...item, amount: item.amount + 1, total: (item.amount + 1) * item.price }
              : item
          );
        } else {
          // Add the product to the cart with an initial amount of 1
          updatedCart = [...cart, { ...product, amount: 1, total: product.price }];
        }
      } else if (action === "decrement") {
        if (existingProduct && existingProduct.amount > 1) {
          // Decrease the amount of the existing product
          updatedCart = cart.map((item) =>
            item.name === product.name
              ? { ...item, amount: item.amount - 1, total: (item.amount - 1) * item.price }
              : item
          );
        } else {
          // Remove the product from the cart if the amount is 1
          updatedCart = cart.filter((item) => item.name !== product.name);
        }
      }

      // Only update the cart state and localStorage if the cart has changed
      if (JSON.stringify(cart) !== JSON.stringify(updatedCart)) {
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
      }
    }
  ;


  let displayProducts = location.pathname !== "/" ? products : products.slice(0,3);

  return (
    <div className="bg-white sm:p-8 p-4 rounded-4xl mt-2">
      <div className="mb-4">
        <h1 className="xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold ">
          {title}
        </h1>
        <p className="text-gray-400">Savor Big on Your Favourite Nutty Treats</p>
      </div>
      <div>
        {displayProducts.map((product, index) => {
          const cartProduct = cart.find((item) => item.name === product.name);
          const amount = cartProduct ? cartProduct.amount : 0;

          return (
            <div key={index} className="flex items-center justify-between mb-4 border-b border-gray-300">
              <div className="flex items-start gap-3 mb-3">
                <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all long-animate">
                  <img width={10} src={product.img} alt="" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm">{product.desc}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">₦{product.price} each</p>
                <div className="flex items-center justify-between rounded-lg bg-[#f7f8fd] p-1">
                  <img
                    id="minus"
                    onClick={() => handleCart("decrement", product)}
                    src={minusIcon}
                    alt="icon-minus"
                    className="cursor-pointer"
                  />
                  <p className="font-semibold">{amount}</p>
                  <img
                    id="add"
                    onClick={() => handleCart("increment", product)}
                    src={plusIcon}
                    alt="icon-plus"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;