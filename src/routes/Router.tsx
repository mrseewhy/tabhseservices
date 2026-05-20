import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PagesLayout from "../layouts/PagesLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import WhyTAB from "../pages/WhyTAB";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFound";
import TrainingPage from "../pages/TrainingPage";
import Trainings from "../pages/Trainings";
import { TrainingData } from "../data/TrainingData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PagesLayout />,
        children: [
          {
            path: "about-us",
            element: <About />,
            handle: { title: "About Us" },
          },
          {
            path: "services",
            element: <Services />,
            handle: { title: "Our Services" },
          },
          {
            path: "why-us",
            element: <WhyTAB />,
            handle: { title: "Why TAB HSE" },
          },
          {
            path: "trainings",
            element: <TrainingPage />,
            handle: { title: "Our Trainings" },
          },
          {
            path: "trainings/:slug",
            element: <Trainings />,
            handle: { title: "Our Trainings" },
            loader: ({ params }) => {
              const training = TrainingData.find((t) => t.slug === params.slug);
              if (!training) throw new Response("Not Found", { status: 404 });
              return training;
            },
            errorElement: <NotFoundPage />,
          },
          {
            path: "contact-us",
            element: <ContactPage />,
            handle: { title: "Contact Us" },
          },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
