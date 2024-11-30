import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import CourseDetails from "./pages/home/components/courses/course.details/index.jsx";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
     element: <Home />,
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
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
