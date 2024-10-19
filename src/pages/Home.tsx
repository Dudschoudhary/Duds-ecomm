import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../features/store'
import { product } from "../features/ecomSlice"
import { fetchProducts } from '../features/ecomSlice'


const Home = () => {
    const dispatch: AppDispatch = useDispatch();

    const {products,loading,error} = useSelector((state: RootState) => state.products)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if(loading){
        return<h2 className='p-4 text-center'>Loading....</h2>
    }
    if(error){
        return <p className='p-4 text-center text-red-600'>Error ! {error}</p>
    }
    return (
        <>
            <h2 className="text-2xl mb-4">Products</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product: product) => (
                    <li key={product.id} className="border p-4 rounded shadow">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
                            <h3 className="font-semibold">{product.title}</h3>
                            <p>$ {product.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home