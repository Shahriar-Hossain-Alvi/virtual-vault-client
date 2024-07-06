import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import Men from "../components/Pages/Men/Men";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/men',
                element: <Men></Men>
            }
        ]
    },
]);

export default router;