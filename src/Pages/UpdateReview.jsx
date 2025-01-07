import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const UpdateReview = () => {
    const {users} = useContext(AuthContext)
    const singlereview = useLoaderData()
    const navigate = useNavigate()
    console.log(singlereview)
    const{ name,
        email,
        title,
        cover,
        publish,
        rating,
        Genres,
       review,
       _id
    } = singlereview

       const handleupdate = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = users?.displayName
        const email = users?.email
        const title = form.title.value
        const cover = form.cover.value
        const publish = form.publish.value
        const rating = form.rating.value
        const Genres = form.genres.value
        const review = form.review.value
        const updateReview= {
            name,
            email,
            title,
            cover,
            publish,
            rating,
            Genres,
           review,
        }
        console.log( updateReview)

        fetch(`https://cill-gamer-server.vercel.app/gamer/${_id}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(updateReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "Updated!",
                text: " Your  review item  successfully update.",
                icon: "success"
              });
              navigate('/myReviews')
        })
       }
    return (
        <div className=' my-6'>
           <Fade cascade>
            <div className='my-6'>
                <h1 className='text-center font-bold text-2xl'> Update Your Game Review</h1>
                <p className='text-center text-sm'>Provide a brief overview of the game and what readers can expect from the review</p>
            </div>
            </Fade>
            <section className="grid  grid-cols-1 md:grid-cols-2 border border-sky-300  rounded-xl">
        <div className="flex order-2 md:order-1 flex-col items-center justify-center p-6">
          <div className="w-full  shrink-0 ">
            <h1 className="text-center mb-4 font-bold text-sky-200">Update Review</h1>
          <form onSubmit={handleupdate} className='flex flex-col dark:text-black   gap-6'>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 focus:outline-none' type="text" placeholder='Name' name="name" value={users?.displayName||''} readOnly id="" />
                        <input className='border-b-2 w-64 focus:outline-none' type="email" placeholder='Email' name="email" value={users?.email||''} readOnly id="" />
                        </div>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 focus:outline-none' type="text" placeholder='Game Title' defaultValue={title} name="title" id="" />
                        <input className='border-b-2 w-64 focus:outline-none' type="text" placeholder='Game Cover' defaultValue={cover} name="cover" id="" />

                        </div>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 focus:outline-none' type="number" placeholder='Publishing year'defaultValue={publish} name="publish" id="" />
                        <input className='border-b-2 w-64 focus:outline-none' type="number" placeholder='Rating' defaultValue={rating} name="rating" id="" />
                        </div>
                        <div className="">
                        <input className='border-b-2 w-full focus:outline-none' type="text" placeholder='Review Description' name="review" defaultValue={review} id="" /> 
                       
                       
                        </div>
                        <div>
                       
      <select
       
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        defaultValue={Genres} 
        name="genres"
         
      
      >
        <option className="text-sky-600" value="Genres" disabled>
        Genres
        </option>
        <option value="action">Action</option>
        <option value="rpg">RPG</option>
        <option value="adventure">Adventure</option>
       
      </select>
                        </div>
                        
                        <div className='space-y-1 mx-auto'>
                        <input className='btn btn-wide bg-sky-100 text-sky-600' type="submit" value="Update" />
                        
                        </div>

                    </form>
          </div>
        </div>
        <div className="flex justify-center items-center p-4  md:order-2 order-1">
          <img
            className=" rounded-r-xl"
            src="https://i.ibb.co.com/Qv917pk/43165.jpg"
            alt=""
          />
        </div>
      </section>
            
        </div>
    );
};

export default UpdateReview;