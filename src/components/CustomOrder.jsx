import plusIcon from "/icon-plus.svg";
import minusIcon from "/icon-minus.svg";
import deleteIcon from "/icon-delete.svg";
import { CartContext } from "../Contexts/CartContext";
import { useState, useContext } from "react";

const CustomOrder = () => {
  const { products } = useContext(CartContext);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddProduct = () => {
    setSelectedProducts((prevProducts) => [
      ...prevProducts,
      { product: products[0], quantity: 1 },
    ]);
  };

  const handleRemoveProduct = (index) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  const handleSelectProduct = (index, e) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].product = products.find(
      (product) => product.name === e.target.value
    );
    setSelectedProducts(updatedProducts);
  };

  const handleQuantity = (index, action) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (action === "add") updatedProducts[index].quantity++;
      if (action === "sub" && updatedProducts[index].quantity > 1)
        updatedProducts[index].quantity--;
      return updatedProducts;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (selectedProducts.length === 0)
      formErrors.products = "At least one product must be selected";
    if (!formData.message) formErrors.message = "Order instructions are required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});

      // Construct the WhatsApp message
      const productDetails = selectedProducts
        .map(
          (item) =>
            `- Product: ${item.product.name}, Quantity: ${item.quantity}, Price per unit: ₦${item.product.price}, Total: ₦${item.product.price * item.quantity}`
        )
        .join("\n");

      const whatsappMessage = `Hello, I would like to place a custom order:
- Name: ${formData.name}
${productDetails}
- Instructions: ${formData.message}`;

      // Redirect to WhatsApp
      const whatsappURL = `https://wa.me/2348028655703?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappURL, "_blank");

      setIsSubmitting(false);
      setFormData({ name: "", message: "" });
      setSelectedProducts([]);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-[#36B864] p-4 rounded-4xl relative text-white">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl text-white xl:text-[3.5rem] lg:text-[2.5rem] text-[1.5rem] leading-none mb-4">
          Custom Order
        </h2>
        <p className="mb-2 text-sm text-[#ece9e9]">Savor your flavours, customize your cravings</p>
        <div className="flex flex-col gap-2">
          {/* Name field */}
          <div>
            <label className="mr-[9px] block font-bold" htmlFor="name">
              Name <i className="font-normal">(Full name or something you identify by)</i>
            </label>
            <input
              className="outline-none w-full p-2 rounded-4xl border border-[#f0ecec]"
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Product selection */}
          <div>
            <label className="mr-[9px] block font-bold">Products</label>
            {selectedProducts.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="">
                  <select
                    onChange={(e) => handleSelectProduct(index, e)}
                    className="outline-none w-full p-2 rounded-4xl border border-[#f0ecec]"
                    value={item.product.name}
                  >
                    {products.map((product, i) => (
                      <option key={i} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 rounded-lg bg-[#f7f8fd] p-1 w-fit mt-2">
                        <img
                          onClick={() => {handleQuantity(index, "sub")}}
                          src={minusIcon}
                          alt="icon-minus"
                          className="cursor-pointer"
                        />
                        <p className="font-bold text-black">{item.quantity}</p>
                        <img
                          onClick={() => {handleQuantity(index, "add")}}
                          src={plusIcon}
                          alt="icon-plus"
                          className="cursor-pointer"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(index)}
                        className="text-red-500 hover:underline"
                      >
                        <img src={deleteIcon}/>
                      </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddProduct}
              className="mt-2 py-2 px-4 bg-white text-black rounded-lg hover:bg-gray-200"
            >
              Add Product
            </button>
            {errors.products && <p className="text-red-500 text-sm">{errors.products}</p>}
          </div>

          {/* Message field */}
          <div>
            <label className="mr-[9px] block font-bold" htmlFor="message">
              Order Instructions
            </label>
            <textarea
              className="outline-none w-full p-2 rounded-4xl border border-[#f0ecec]"
              cols="30"
              rows="2"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
        </div>

        {/* Submit button */}
        <button
          className="py-[9px] px-[18px] block rounded-4xl bg-[white] hover:bg-[#111D15] text-black w-full mt-4 shadow-lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default CustomOrder;