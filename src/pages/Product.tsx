
import { useState } from "react"
import { BsFillCartFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../features/store"
import { addToCart } from "../features/ecomSlice"
const Product = () => {
    const [clicked, setClicked] = useState(false)
    const [count, setCount] = useState(1)
    const { productId } = useParams();

    const dispatch = useDispatch<AppDispatch>()

    const product: any = useSelector<RootState>(state => state.products.products.find(product => Number(product.id) === Number(productId)))
    console.log("productid", productId)

 const increment = () =>{
    if(count <10){
        setCount(count + 1);
    }
 } 
 const decrement = () =>{
    if(count > 1){
        setCount(count - 1)
    }
 }
 const cartHandle = () =>{
    dispatch(addToCart({product,count}))
    setClicked(true)
}
    return (
        <div className="max-w-md mx-auto p-4 border  mt-4 shadow-2xl">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-semibold mb-4">$ {product.price}</p>
            <div className="flex justify-between">
                <button onClick={cartHandle} className="bg-blue-500 text-white px-5 py-2 rounded flex justify-center items-center">{clicked ? 'Added to cart' : 'Add to cart'}<span className='mx-3'><BsFillCartFill /></span></button>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={decrement} value={count} onChange={(e)=>setCount(e.target.value)} className='border w-8 h-8 rounded-full flex justify-center items-center text-2xl font-bold bg-red-600 text-white'>-</button>
                    <div>
                        <input readOnly className="px-1 w-10 border outline-none rounded text-center text-2xl " value={count} />
                    </div>
                    <button onClick={increment} value={count} onChange={(e) => setCount(e.target.value)} className='border w-8 h-8 rounded-full flex justify-center items-center text-2xl font-bold bg-green-800 text-white'>+</button>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
        </div>
    )
}

export default Product