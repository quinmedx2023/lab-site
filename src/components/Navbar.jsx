import React from 'react';
import {BrowserRouter, Route, NavLink, Routes, Outlet} from 'react-router-dom';
import About from '../pages/About';
import Research from '../pages/Research';
import People from '../pages/People';
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
            "text": "News",
            "path": "/news",
            "element": <News />
        }
    ];
    return (
        <div>
            <BrowserRouter>
                <nav className="bg-slate-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-24 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="block h-16 w-auto lg:hidden" src="https://bit.bme.jhu.edu/img/som3.png" alt="Your Company" />
                                    <img className="hidden h-16 w-auto lg:block" src="https://bit.bme.jhu.edu/img/som3.png" alt="Your Company" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {data.map((link,index) => {
                                            return <NavLink key={index} to={link.path} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-4 h-16 text-2xl font-medium">{link.text}</NavLink>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:hidden" id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {data.map((link,index) => {
                                    return <NavLink key={index} to={link.path} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{link.text}</NavLink>
                                })}
                            </div>
                        </div>
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