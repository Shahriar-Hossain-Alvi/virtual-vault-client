import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Men from "../Pages/Men/Men";
import Home from "../Pages/Home/Home";
import AuthenticationChoice from "../Pages/Authentication/AuthenticationChoice";


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
    {
        path: "/loginORregister",
        element: <AuthenticationChoice />
    }
]);

export default router;