import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../Redux/authSlice';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const navlinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-transparent p-4 text-black shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Webtoun</h1>

                {/* Menu Toggle Button */}
                <button className="md:hidden text-black text-2xl" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>

                {/* Nav Links */}
                <ul className={`md:flex md:items-center text-lg md:justify-evenly absolute md:static top-16 left-0 w-full md:w-auto  bg-white md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 transition-all ${showMenu ? 'block' : 'hidden'}`}>
                    {navlinks.map((link, index) => (
                        <li key={index} className="hover:text-blue-700 hover:border-b-2 border-blue-700">
                            <Link to={link.path} onClick={() => setShowMenu(false)}>{link.label}</Link>
                        </li>

                    ))}
                    {
                        auth ? <>
                            {
                                auth ? <li className="hover:text-blue-700 hover:border-b-2 border-blue-700">
                                    <Link to={auth.user?.role === 1 ? "/dashboard/admin" : "/dashboard/user"} onClick={() => setShowMenu(false)} >{auth?.user?.name}</Link>
                                </li> : <></>
                            }
                        </> : <></>
                    }

                    {/* Login & Signup Buttons */}
                    {
                        auth?.user ? <>
                            <Link className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-center" onClick={() => dispatch(clearUser())}>Logout</Link>
                        </> : <>
                            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4">
                                <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 text-center" onClick={() => setShowMenu(false)}>Login</Link>
                                <Link to="/signup" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-center" onClick={() => setShowMenu(false)}>Signup</Link>
                            </div>
                        </>
                    }

                </ul>
            </div >
        </nav >
    );
}

export default Navbar;
