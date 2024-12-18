import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CourseDetails from "./pages/courses/course.details/index.jsx";
import Home from "./pages/home";
import Cart from "./pages/cart/index.jsx";
import CoursesPage from "./pages/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/course-details/:id",
    element: <CourseDetails />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
