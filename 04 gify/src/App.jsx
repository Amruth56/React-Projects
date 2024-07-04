import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";

import Category from "./pages/category";
import GifPage from "./pages/single-gif";
import Search from "./pages/search";
import Favorites from "./pages/favorites";
const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:category",
        element: <Category></Category>,
      },
      {
        path: "/search/:query",
        element: <Search></Search>,
      },
      {
        path: "/:type/:slug",
        element: <GifPage></GifPage>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
