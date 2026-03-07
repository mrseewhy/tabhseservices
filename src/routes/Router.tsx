import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PagesLayout from "../layouts/PagesLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import WhyTAB from "../pages/WhyTAB";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFound";












export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { index: true, element: <Home /> },
            {
                element: <PagesLayout />, children: [
                    { path: "about-us", element: <About />, handle: { title: "About Us" } },
                    { path: "services", element: <Services />, handle: { title: "Our Services" } },
                    { path: "why-us", element: <WhyTAB />, handle: { title: "Why TAB HSE" } },
                    { path: "contact-us", element: <ContactPage />, handle: { title: "Contact Us" } },
                ]
            },
            { path: "*", element: <NotFoundPage /> }
        ]
    }
])