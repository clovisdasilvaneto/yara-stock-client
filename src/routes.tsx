import NotFound from "./containers/NotFound";
import Products from "./containers/Products";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Warehouses from "./containers/Warehouses";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout title="Product list">
        <Products />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/warehouses/",
    element: (
      <Layout title="Warehouses list">
        <Warehouses />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
]);

export default router;
