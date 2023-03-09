import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layout/main/Main";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Vehicles from "../pages/vehicles/Vehicles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
