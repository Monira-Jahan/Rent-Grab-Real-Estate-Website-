import React from 'react';
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
    return (
        <div className="navbar bg-base-100 border shadow-xl rounded-xl mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />Rent & Grab</svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        <li><a>Home</a></li>
                        <li>
                            <a>Property</a>

                        </li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold text-primary italic">Rent & Grab</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Property</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white"><FaUserAlt className='mr-1 text-white' />Join Us</a>
            </div>
        </div>
    );
};

export default Header;