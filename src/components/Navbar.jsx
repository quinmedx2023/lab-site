import React,{useState} from 'react';
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';
import {tw} from '@twind/core';
import About from '../pages/About';
import Research from '../pages/Research';
import People from '../pages/People';
import Publications from '../pages/Publications';
import News from '../pages/News';

function Navbar() {
    const data = [
        {
            "text": "Home",
            "path": "/",
            "element": <About />
        },
        {
            "text": "Research",
            "path": "/research",
            "element": <Research />
        },
        {
            "text": "People",
            "path": "/people",
            "element": <People />
        },
        {
            "text": "Publications",
            "path": "/publications",
            "element": <Publications />
        },
        {
            "text": "News",
            "path": "/news",
            "element": <News />
        }
    ];
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <nav className={tw`bg-slate-800`}>
                    <div>{showMenu}</div>
                    <div className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
                        <div className={tw`relative flex h-24 items-center justify-between`}>
                            <div className={tw`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}>
                                <div className={tw`flex flex-shrink-0 items-center`}>
                                    <img className={tw`block h-16 w-auto lg:hidden`} src="https://bit.bme.jhu.edu/img/som3.png" alt="Your Company" />
                                    <img className={tw`hidden h-16 w-auto lg:block`} src="https://bit.bme.jhu.edu/img/som3.png" alt="Your Company" />
                                </div>
                                <button type="button" onClick={() => setShowMenu(!showMenu)}
                                    className={tw`inline-flex items-center ml-40 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}>
                                    <svg className={tw`w-5 h-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                    </svg>
                                </button>
                                <div className={tw`hidden sm:ml-6 sm:block`}>
                                    <div className={tw`flex space-x-4`}>
                                        {data.map((link,index) => {
                                            return <NavLink key={index} to={link.path} className={tw`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-4 h-16 text-2xl font-medium`}>{link.text}</NavLink>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showMenu && 
                            <div className={tw`sm:hidden`} id="mobile-menu">
                                <div className={tw`space-y-1 px-2 pb-3 pt-2`}>
                                    {data.map((link,index) => {
                                        return <NavLink key={index} to={link.path} className={tw`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>{link.text}</NavLink>
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                </nav>
                <Routes>
                    {data.map((link,index) => {
                            return <Route key={index} path={link.path} element={link.element} />
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;