import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Product from "../pages/Product"
import CartItems from "../pages/CartItems"


const router = createBrowserRouter([
{
    path:"/",
    Component:Layout,
    children:[
        {
            path:"",
            Component:Home,
        },
        {
            path:"product/:productId",
            Component:Product
        },
        {
            path:"cart-items",
            Component:CartItems
        }
    ]
}
])

export default router