import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const AllReviewCard = ({reviews}) => {
    const {title,cover,rating,Genres,_id,review} = reviews
    return (
        <div>
            <div className="card h-96 card-compact dark:bg-gray-400 mx-auto  shadow-xl">
  <figure>
    <img
    className='h-52 w-full'
      src={cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex justify-between'>
    <h2 className="card-title capitalize">{title}</h2>
    <a className="my-anchor-element"><h5 className='flex  items-center gap-2 text-xl'>  <Rating style={{ maxWidth: 50 }} value={rating} readOnly /><span className='text-sm'>{rating}.0</span></h5></a>
    <Tooltip anchorSelect=".my-anchor-element" content="Rating" />
    </div>
    
    <p>{review?.slice(0, 40)}</p>
    <p className='border border-sky-400 text-sky-400 rounded-xl px-2 w-20 text-center bg-sky-50 capitalize'>{Genres}</p>
  
   
   
    <div className="card-actions mt-4">
      <Link to={`/review/${_id}`}><button className="btn bg-sky-400 text-white font-bold dark:border-none">Explore Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AllReviewCard;