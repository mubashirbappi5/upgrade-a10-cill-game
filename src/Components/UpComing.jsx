import React from 'react';
import UpcomingCard from './UpcomingCard';
import { Slide } from 'react-awesome-reveal';

const UpComing = () => {
    const upcomingData =[
        {
          "title": "Infinity Nikki",
          "releaseDate": "2025-05-15",
          "image": "https://i.ibb.co.com/gtny1YY/download-4.jpg"
        },
        {
          "title": "Squid Game Unleashed",
          "releaseDate": "2025-07-22",
          "image": "https://i.ibb.co.com/rcVXbZS/download-3.jpg"
        },
        {
          "title": "Grid Legends: Deluxe Edition",
          "releaseDate": "2025-03-10",
          "image": "https://i.ibb.co.com/Sy8NWsk/images-8.jpg"
        },
        {
          "title": "Avatar: Reckoning",
          "releaseDate": "2025-09-01",
          "image": "https://i.ibb.co.com/F8WhJ67/download-2.jpg"
        },
        {
          "title": "Racing Master",
          "releaseDate": "2025-11-15",
          "image": "https://i.ibb.co.com/vvcqP5x/images-7.jpg"
        }
      ]
      console.log(upcomingData )
    
    return (
        <div className='w-11/12 mx-auto'>
          <Slide triggerOnce>
          <h1 className='text-2xl font-bold text-center my-10'>Upcoming Games</h1>
</Slide>
            <section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
               {
                upcomingData.map(upcard=><UpcomingCard upcard={upcard}></UpcomingCard>)
               }
            </section>
            
        </div>
    );
};

export default UpComing;