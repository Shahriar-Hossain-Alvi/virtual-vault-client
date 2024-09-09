import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css"
import Ripples from 'react-ripples'
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart, FaUser } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/men'>Men</NavLink></li>
        <li><NavLink to='/women'>Women</NavLink></li>
        <li><NavLink to='/accessories'>Accessories</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="">
            {/* navbar top */}
            <div className="bg-vv-dark-gray text-[#dddddd] font-open-sans text-sm flex">
                {/* left side */}
                <div className="flex w-5/6 md:w-2/3 items-center lg:w-1/2">
                    <div>
                        <select className="select bg-vv-dark-gray">
                            <option defaultValue>English</option>
                            <option>Bangla</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    <div className="border-x">
                        <select className="select bg-vv-dark-gray">
                            <option defaultValue>USD $</option>
                            <option>BDT ৳</option>
                            <option>INR ₹</option>
                        </select>
                    </div>
                    <div className="pl-5">
                        <h4>Toll Free: +123 4567 8900</h4>
                    </div>
                </div>

                {/* right side */}
                <div className="lg:w-1/2 hidden lg:flex justify-end">
                    <Ripples>
                        <Link className="flex justify-center items-center h-12 px-5"><FaHeart /> Wishlist</Link>
                    </Ripples>
                    <Ripples>
                        <Link className="border-x flex justify-center items-center h-12 px-5"><FaUser /> My Account</Link>
                    </Ripples>
                    <Ripples>
                        <Link to="loginORregister" className="flex justify-center items-center h-12 px-5"><RiLoginBoxFill /> Login / Register</Link>
                    </Ripples>
                </div>

                {/* Button for small devices */}
                <div className="w-1/6 md:w-1/3 dropdown lg:hidden justify-end flex">
                    <Ripples>
                        <button tabIndex={0} role="button" className="btn bg-transparent border-none text-[#dddddd] hover:bg-transparent lg:hidden">
                            <MdOutlineMenuOpen className="text-xl" />
                        </button>
                    </Ripples>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content dropdown-left rounded-box z-[1] mt-10 w-52 shadow bg-vv-dark-gray p-0">
                        <li className="hover:bg-vv-red rounded-t-xl">
                            <Link className="flex justify-center items-center h-12 px-5"><FaHeart /> Wishlist</Link>
                        </li>
                        <li className="hover:bg-vv-red">
                            <Link className="flex justify-center items-center h-12 px-5"><FaUser /> My Account</Link>
                        </li>
                        <li className="hover:bg-vv-red rounded-b-xl">
                            <Link to="loginORregister" className="flex justify-center items-center h-12 px-5"><RiLoginBoxFill /> Login / Register</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* navbar bottom */}
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            id="navbarLinksMobile"
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="flex gap-1" to='/'>
                        <img className="w-8" src={logo} alt="logo" />
                        <h2 className="font-bold text-2xl">Virtual Vault</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="navbarLinksPc" className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Ripples>
                        <button className="btn text-vv-red flex items-center gap-1 bg-transparent border-none hover:bg-transparent">
                            <GiShoppingBag />
                            <span>0 Items</span>
                        </button>
                    </Ripples>
                </div>
            </div>
        </div>
    );
};

export default Navbar;