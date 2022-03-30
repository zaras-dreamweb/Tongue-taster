import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-right font-serif text-xl pt-3'>
                <Link className='px-3' to={'/'}>Home</Link>
                <Link className='px-3' to={'/meals'}>Meals</Link>
                <Link className='px-3' to={'/restaurant'}>Restaurant Address</Link>
                <Link className='px-3' to={'/about'}>About us</Link>
            </nav>
        </div>
    );
};

export default Header;