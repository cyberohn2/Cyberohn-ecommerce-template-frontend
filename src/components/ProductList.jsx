import productImage from "/hero-img.webp";
import plusIcon from "/icon-plus.svg";
import minusIcon from "/icon-minus.svg";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

const ProductList = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCart = (action, product) => {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (action === "increment") {
      if (existingProduct) {
        // Update the amount of the existing product
        setCart(
          cart.map((item) =>
            item.name === product.name
              ? { ...item, amount: item.amount + 1, total: (item.amount + 1) * item.price }
              : item
          )
        );
      } else {
        // Add the product to the cart with an initial amount of 1
        setCart([...cart, { ...product, amount: 1, total: product.price }]);
      }
    } else if (action === "decrement") {
      if (existingProduct && existingProduct.amount > 1) {
        // Decrease the amount of the existing product
        setCart(
          cart.map((item) =>
            item.name === product.name
              ? { ...item, amount: item.amount - 1, total: (item.amount - 1) * item.price }
              : item
          )
        );
      } else {
        // Remove the product from the cart if the amount is 1
        setCart(cart.filter((item) => item.name !== product.name));
      }
    }
  };

  const products = [
    {
      img: productImage,
      name: "Peanott Milk",
      desc: "Healthy and nourishing groundnut milk",
      price: 500,
    },
    {
      img: productImage,
      name: "Peanott Butter",
      desc: "Creamy and delicious peanut butter",
      price: 700,
    },
    {
      img: productImage,
      name: "Peanott Cookies",
      desc: "Crunchy and tasty peanut cookies",
      price: 300,
    },
  ];

  return (
    <div className="bg-white sm:p-8 p-4 rounded-4xl justify-between mt-2">
      <h1 className="xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold mb-4">
        Our Products
      </h1>
      <div>
        {products.map((product, index) => {
          const cartProduct = cart.find((item) => item.name === product.name);
          const amount = cartProduct ? cartProduct.amount : 0;

          return (
            <div key={index} className="flex items-center justify-between mb-4">
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