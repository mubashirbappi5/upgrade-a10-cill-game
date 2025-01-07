import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import Themes from '../Components/Themes';

const Root = () => {
    return (
        <div className='dark:bg-gray-900 bg-gray-100 dark:text-white'>
            <header className='fixed z-50 w-full  '>
                <Navber/>
               
            </header>
            <main className='pt-24 w-11/12 mx-auto '>
            <Outlet></Outlet>
            </main>
           
            <footer>
               <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;