import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-raleway">
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;