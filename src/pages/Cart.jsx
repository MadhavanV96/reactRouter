import React from 'react';
import CartProduct from './CartProduct';

const Cart = ({cart,increaseQuantity,decreaseQuantity,removeProduct,calculateTotal}) => {
    return (
        <div>
            <section className="py-5 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className=" font-manrope font-bold text-4xl text-center text-black">Shopping Cart
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                    <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Total Price</h5>

                    <div className="flex items-center justify-between gap-5 ">
                        <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">${calculateTotal}</h6>
                    </div>
                </div>
            </div>
            
            {
            cart.map((item)=>(
                <div key={item} className="mt-8">
                    <CartProduct product={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} />                  
                </div>
            ))}
            </section>
        </div>
    );
};

export default Cart;