import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";


//Layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"))



//Pages
const Home = lazy(() => import("../pages/Home"))




export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { index: true, element: <Home /> }
        ]
    }
])