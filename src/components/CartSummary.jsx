import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext';
import deleteIcon from "/icon-delete.svg";

const CartSummary = () => {
const { cart, setCart } = useContext(CartContext);

  return (
    <div class="w-[40%] md:w-[300px] p-3 shadow-md rounded-lg absolute md:top-[90px] md:right-[90px] top-14 right-10 bg-white z-20">
        <p className='text-left border-b pb-2 font-bold'>Cart</p>
        {cart.map( (item, index) => <div key={index} id="cart-details" className='flex items-center justify-between'>
            <div className='flex items-center gap-2.5'>
                <img width={100} className='w-[25px] rounded-sm' src={item.img} alt="image-product-1"/>
                <div className='text-sm mr-auto' class="cart-info">{item.name} <span className='font-bold block'>{item.price} X {item.amount} = {item.price*item.amount}</span></div>
            </div>
            <img className='cursor-pointer' id="delete" src={deleteIcon} alt="icon-delete"/>
        </div>)}
        {cart.length > 0 && <button className='rounded-sm p-2.5 bg-[var(--yellow)] text-white text-sm w-full mt-3.5 cursor-pointer' id="checkout-btn">Checkout</button>}
        {cart.length == 0 && <p className='mx-auto text-center' id="empty-message">Your cart is empty</p>}
    </div>
  )
}

export default CartSummary
