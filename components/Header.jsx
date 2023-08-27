import React from 'react';
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
    return (
        <div className="navbar bg-base-100 border shadow-xl rounded-xl mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <a>Property</a>
                        
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <img src="https://www.canva.com/design/DAFsn5LQlpc/HTMl1IdHJtqq4u_dfVUq5g/edit?utm_content=DAFsn5LQlpc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt=''/>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Property</summary>
                            
                        </details>
                    </li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white"><FaUserAlt className='mr-1 text-white'/>Join Us</a>
            </div>
        </div>
    );
};

export default Header;