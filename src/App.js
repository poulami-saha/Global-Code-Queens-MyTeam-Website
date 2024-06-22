import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Playground from "./components/pages/Playground/Playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/playground", element: <Playground /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
