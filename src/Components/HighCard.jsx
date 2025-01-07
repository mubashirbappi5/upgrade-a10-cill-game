import React from 'react';


import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { Rating } from '@smastrom/react-rating';

const HighCard = ({high}) => {
    const {title,cover,rating,name,_id,review} = high
    console.log(high)
    return (
        <div>
           <div className='border rounded-xl w-11/12 mx-auto h-96  md:w-64 p-5 space-y-4'>
           <div>
                <img className='w-64 h-40 mx-auto rounded-xl' src={cover} alt="" />

            </div>
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
              <h1 className='text-xl font-semibold capitalize'>{title}</h1>
              <a className="my-anchor-element"><h5 className='flex  items-center gap-2 text-xl'>  <Rating style={{ maxWidth: 50 }} value={rating} readOnly /><span className='text-sm'>{rating}.0</span></h5></a>
<Tooltip anchorSelect=".my-anchor-element" content="Rating" />
              
              </div>
               
                <p>{review?.slice(0, 30)}</p>
                <Link to={`/review/${_id}`} className="btn btn-outline border-sky-500 font-medium text-sky-600">Explore Details</Link>


            </div>
           </div>
            
        </div>
    );
};

export default HighCard;