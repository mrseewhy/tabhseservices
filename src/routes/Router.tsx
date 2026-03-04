import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";



//Layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"))
const PagesLayout = lazy(() => import("../layouts/PagesLayout"))



//Pages
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const ContactPage = lazy(() => import("../pages/ContactPage"))
const WhyTAB = lazy(() => import("../pages/WhyTAB"))
const Services = lazy(() => import("../pages/Services"))




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
            }
        ]
    }
])