import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import SearchPage from "./searchpage";
import CartPage from "./cartPage";
import ProductDetailsPage from "./product";
import Layout from "../../shared/ui/Layout";
import FavoritesPage from "./favoritesPage/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, 
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "cart",
        Component: CartPage,
      },
      {
        path: "/favorites",
        Component: FavoritesPage
      },
      {
        path: "/:id",
        Component: ProductDetailsPage,
      },
    ],
  },
]);

export default router;