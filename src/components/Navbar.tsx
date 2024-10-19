import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
const Navbar = () => {

  const cartItem:any = useSelector<RootState>(product => product.products.cart)

  console.log("cartitems Duds",cartItem)
  return (
    <nav className='bg-[#a1a088] w-full h-14 flex justify-around items-center poppins-black'>
    <Link to="/"><h1 className='text-white text-lg  '>E-commerce</h1></Link>
    <ul className="flex  text-white gap-3 justify-center items-center">
      <li> <Link to="category/mens clothing">Men's</Link></li>
      <li><Link to="category/jewelery">Jewelery</Link></li>
      <li><Link to="category/electronics">Electronics</Link></li>
      <li><Link to="category/womens clothing">Women's</Link></li>
    </ul>
    <Link to="/cart-items" className="relative flex items-center justify-center "><BsFillCartFill className="text-white text-2xl"/> <span  className="absolute -top-1 left-2 border w-5 h-5 flex justify-center items-center rounded-full text-white bg-red-600">{cartItem.length}</span><span className="text-white text-xl ms-2">cart</span></Link>
</nav>
  )
}

export default Navbar