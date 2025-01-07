import React from 'react';

const UpcomingCard = ({upcard}) => {
    
    return (
        <div>
            <section className='p-4 rounded-xl border text-center'>
                <div>
                  <img className='w-60 h-32 rounded-xl mx-auto' src={upcard.image} alt="" />

                </div>
                <div>
                    <h1 className='font-medium'>{upcard.title}</h1>
                    <h5 className='font-light'>Release Date: {upcard.releaseDate}</h5>

                </div>
            </section>
        </div>
    );
};

export default UpcomingCard;