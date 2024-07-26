import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home, ContactUs, About, Playground } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
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
