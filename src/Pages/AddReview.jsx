import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AddReview = () => {
    const {users} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleaddData = (e)=>{
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
        const reviewData = {
            name,
            email,
            title,
            cover,
            publish,
            rating,
            Genres,
           review,
            
        }
        console.log(reviewData)
        fetch('https://cill-gamer-server.vercel.app/gamer',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(reviewData)

        })
        .then(res=>res.json())
        .then(data=>{
          form.reset()
           if(data.insertedId){
            Swal.fire({
              title: "Review Added!",
              text: " Your game review successfully added.",
              icon: "success"
            });
            navigate('/reviews')

           }
        })
    }
  return (
    <div className=" my-10">
      <div className=" border-cyan-300 space-y-3 mb-4">
      <Fade cascade>
      <h1 className="text-center text-2xl font-bold">Add Game Review</h1>
        <p className="text-center text-sm">Share your Favourite Game Review</p>
     
</Fade>
</div>
      <section className="grid  grid-cols-1 md:grid-cols-2 border border-sky-300  rounded-xl">
        <div className="flex order-2 md:order-1 flex-col items-center justify-center p-6">
          <div className="w-full  shrink-0 ">
            <h1 className="text-center mb-4 font-bold text-sky-200">Review</h1>
          <form onSubmit={handleaddData} className='flex flex-col  dark:text-black  gap-6'>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="text" placeholder='Name' name="name" value={users?.displayName||''} readOnly id="" />
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="email" placeholder='Email' name="email" value={users?.email||''} readOnly id="" />
                        </div>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="text" placeholder='Game Title' name="title" id="" />
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="text" placeholder='Game Cover' name="cover" id="" />

                        </div>
                        <div className="flex gap-4">
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="number" placeholder='Publishing year' name="publish" id="" />
                        <input className='border-b-2 w-64 dark:px-2 focus:outline-none' type="number" min={0} max={5} placeholder='Rating' name="rating" id=""  />
                        </div>
                        <div className="">
                        <input className='border-b-2 w-full dark:px-2 focus:outline-none' type="text" placeholder='Review Description' name="review" id="" /> 
                       
                       
                        </div>
                        <div>
                       
      <select
       
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        defaultValue="Genres" 
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
                        <input className='btn btn-wide bg-sky-100 text-sky-600' type="submit" value="Submit" />
                        
                        </div>

                    </form>
          </div>
        </div>
        <div className="flex justify-center items-center p-4  md:order-2 order-1">
          <img
            className=" rounded-r-xl"
            src="https://i.ibb.co.com/bvPTc4C/headphones-chair-gaming-setup.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AddReview;
