import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { product } from '../features/ecomSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../features/store'
import { removeCartItems } from '../features/ecomSlice'


const CartItems = () => {
    const cartItems: any = useSelector<RootState>(state => state.products.cart)

    const total = cartItems.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
    const discountPercent = 0.10; // 10%
    const totalDiscount = total * discountPercent;
    const afterDiscountAmount = total - totalDiscount;

    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul className="space-y-4">
                        {cartItems.map((item: product) => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2 ">
                                <span className="font-medium flex-1">{item.title}</span>
                                <span className="text-gray-600 flex-1">Quantity:- {item.quantity}<label className='text-black font-bold'></label></span>
                                <span className="text-black flex-1 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                <button onClick={()=>dispatch(removeCartItems(item.id))} className='flex-none border rounded px-2 py-1 bg-red-500 text-white hover:bg-red-600' ><IoMdClose /></button>
                            </li>
                        ))}
                    </ul>
                )}
                {cartItems.length > 0 && (
                    <div className="mt-4">
                        <div className="mt-2 font-bold text-end">
                            Total: ({cartItems.length} Items) ${total.toFixed(2)}
                        </div>
                        <div className='mt-2 text-end text-red-600'>
                            Discount (10%): ${totalDiscount.toFixed(2)}
                        </div>
                        <div className='mt-2 text-end '>
                            After Discount: ${afterDiscountAmount.toFixed(2)}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartItems