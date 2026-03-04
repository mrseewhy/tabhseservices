import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsAppFloat from "../components/Whatsapp"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div><Outlet /></div>
            <WhatsAppFloat />
            <Footer />

        </div>
    )
}

export default MainLayout