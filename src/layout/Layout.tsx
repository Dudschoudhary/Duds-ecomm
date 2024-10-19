import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <>
            <main className="min-h-[calc(100vh-56px)]">
                <Navbar />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout