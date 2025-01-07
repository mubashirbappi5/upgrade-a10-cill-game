import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Highest from '../Components/Highest';
import UpComing from '../Components/UpComing';
import Partners from '../Components/Partners';
import Blog from '../Components/Blog';
import FAQ from '../Components/FAQ';
import Testimonial from '../Components/Testimonial';


const Home = () => {
  const {name,users }= useContext(AuthContext)
    return (
        <div>
          <section className='mb-5'>
            <Banner/>

        
          </section>
          <section className='my-5'>
            <Highest/>
          </section>
          <section className='my-5'>
            <UpComing></UpComing>
          </section>
          <section className='my-5' id='brand'>
            <Partners/>
          </section >
          <section className='my-5' id='blog'>
            <Blog/>
          
          </section>
          <section className='my-5' id='faq'>
            <FAQ/>
          </section >
          <section className='my-5' id='review'>
            <Testimonial/>
          </section>
            
        </div>
    );
};

export default Home;