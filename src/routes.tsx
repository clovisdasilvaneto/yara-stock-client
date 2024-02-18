import NotFound from "./containers/NotFound";
import Products from "./containers/Products";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout title="Product list">
        <Products />
      </Layout>
    ),
    errorElement: (
      <Layout title="Not found">
        <NotFound />
      </Layout>
    ),
  },
]);

export default router;
