import React, { useEffect, useState } from 'react';
import HighCard from './HighCard';
import { Fade } from 'react-awesome-reveal';


const Highest = () => {
 const [highest,sethighest] = useState([])
    useEffect(()=>{
        fetch('https://cill-gamer-server.vercel.app/gamer?limit=6')
        .then(res=>res.json())
        .then(data=>sethighest(data))

    },[])
    return (
        <div className='w-11/12 mx-auto'>
       <Fade cascade damping={0.1}>
       <h1 className='text-2xl font-bold text-center my-10'>Upcoming Games</h1>
</Fade>
         <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-4'>
         {
             highest.map(high =><HighCard high={high}></HighCard> )
         }
         </section>
            
        </div>
    );
};

export default Highest;