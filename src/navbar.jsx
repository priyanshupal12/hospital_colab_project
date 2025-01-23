import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (
        <nav className="bg-white text-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo / Symbol on the Left */}
                <div className="text-2xl font-bold text-yellow-500 sticky top-0 left-0">
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" className='h-10 sm:h-16' alt="" />
                </div>

                {/* Navbar Links (Center) */}
                <div className="hidden lg:flex lg:items-center lg:w-auto w-full justify-center space-x-6">
                    <NavLink className={({ isActive }) => `${isActive ?
                        "text-sky-500 text-lg montserrat" : "text-gray-800 text-lg hover:text-sky-500 montserrat"}`} to="/">
                        Home
                    </NavLink>
                    <NavLink to="/department" className={({ isActive }) => `${isActive ?
                        "text-sky-500 text-lg montserrat" : "text-gray-800 text-lg hover:text-sky-500 montserrat"}`}>
                        Departments
                    </NavLink>
                    <NavLink to="/doctors" className={({ isActive }) => `${isActive ?
                        "text-sky-500 text-lg montserrat" : "text-gray-800 text-lg hover:text-sky-500 montserrat"}`}>
                        Doctors
                    </NavLink>
                    <NavLink to="/appointments" className={({ isActive }) => `${isActive ?
                        "text-sky-500 text-lg montserrat" : "text-gray-800 text-lg hover:text-sky-500 montserrat"}`}>
                        Appointments
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${isActive ?
                        "text-sky-500 text-lg montserrat" : "text-gray-800 text-lg hover:text-sky-500 montserrat"}`}>
                        Contact
                    </NavLink>
                </div>

                {/* Login Button (Right side) */}
                <div className="hidden lg:block">
                    <a
                        href="#"
                        className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 shadow-md shadow-slate-400 montserrat"
                    >
                        Login
                    </a>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden" onClick={toggleMenu}>
                    <button className="text-black focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (when hamburger is clicked) */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute inset-0 bg-white flex flex-col pl-6 pt-2 space-y-6 top-16 h-[20rem] duration-300`}
            >
                <NavLink to="/" className={({ isActive }) => `${isActive ?
                        "text-orange-500 text-lg" : "text-gray-800 text-lg"}`}>
                    Home
                </NavLink>
                <NavLink to="/department" className={({ isActive }) => `${isActive ?
                        "text-orange-500 text-lg" : "text-gray-800 text-lg hover:text-red-500"}`}>
                    Departments
                </NavLink>
                <NavLink to="/doctors" className={({ isActive }) => `${isActive ?
                        "text-orange-500 text-lg" : "text-gray-800 text-lg hover:text-red-500"}`}>
                    Doctors
                </NavLink>
                <NavLink to="/appointments" className={({ isActive }) => `${isActive ?
                        "text-orange-500 text-lg" : "text-gray-800 text-lg hover:text-red-500"}`}>
                    Appointments
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `${isActive ?
                        "text-orange-500 text-lg" : "text-gray-800 text-lg hover:text-red-500"}`}>
                    Contact
                </NavLink>
                <Link to="" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 max-w-20 text-center">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
