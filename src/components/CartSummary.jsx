import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext';
import deleteIcon from "/icon-delete.svg";
import { Link } from 'react-router-dom';

const CartSummary = () => {
const { cart, setCart } = useContext(CartContext);
const totalPrice = cart.reduce((total, item) => total + item.price * item.amount, 0);

const deleteItem = (e) =>{
  setCart(c => {
    const newCart = [...c]
    newCart.splice(Number(e.target.getAttribute('data-index')),1)
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  
  }); 
}

  return (
    <div className="w-[40%] md:w-[300px] p-3 shadow-md rounded-lg absolute md:top-[50px] md:right-8 top-14 right-8 bg-white z-50">
        <p className='text-left border-b pb-2 font-bold'>Cart</p>
        {cart.map( (item, index) => <div key={index} id="cart-details" className='flex items-center justify-between'>
            <div className='flex items-center gap-2.5'>
                <img width={100} className='w-[25px] rounded-sm' src={item.img} alt="image-product-1"/>
                <div className='text-sm mr-auto'>{item.name} <span className='font-bold block'>{item.price} X {item.amount} = {item.price*item.amount}</span></div>
            </div>
            <img onClick={ (e) => deleteItem(e)} data-index={index} className='cursor-pointer' id="delete" src={deleteIcon} alt="icon-delete"/>
        </div>)}

        {cart.length > 0 && <p className='text-right'>Total: ₦{totalPrice} </p>}
        {cart.length > 0 && <button className='rounded-sm p-2.5 bg-[var(--yellow)] text-white text-sm w-full mt-3.5 cursor-pointer' id="checkout-btn"><Link to='/order-summary'>Checkout</Link></button>}
        {cart.length == 0 && <p className='mx-auto text-center' id="empty-message">Your cart is empty</p>}
    </div>
  )
}

export default CartSummary
