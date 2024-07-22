import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import RolePage from "../pages/RolePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/users",
        element: <UserPage/>,
    },
    {
        path: "/roles",
        element: <RolePage/>,
    },
]);


export default router