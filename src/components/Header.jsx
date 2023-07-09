import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </header>
    );   
}

export default Header;