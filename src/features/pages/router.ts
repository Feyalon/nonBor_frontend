import { createBrowserRouter } from "react-router";
import HomePage from "./homepage";
import ProductDetailsPage from "./product";
import CartPage from "./cartPage";
import SearchPage from "./searchpage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/:id",
    Component: ProductDetailsPage
  },
  {
    path: "/cart/",
    Component: CartPage
  },
  {
    path: "/search",
    Component: SearchPage
  }
]);
export default router