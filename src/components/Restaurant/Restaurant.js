import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Restaurant = () => {

    return (
        <div>
            <h3 className='text-5xl text-violet-900 pt-10 pb-10'>Restaurant page</h3>
            <div>
                <Link to={'jamaica'} className='bg-gray-400 text-white p-4 text-xl m-4 rounded-md'>Jamaica Address</Link>
                <Link to={'bronx'} className='bg-gray-400 text-white p-4 text-xl rounded-md'>Bronx Address</Link>
            </div>
            <div className='flex justify-center items-center w-full pt-20'>
                <Outlet />
            </div>
        </div>
    );
};

export default Restaurant;