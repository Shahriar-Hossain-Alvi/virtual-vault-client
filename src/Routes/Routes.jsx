import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import MainLayout from "../components/Layout/MainLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;