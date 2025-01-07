import React, { useContext, useEffect } from "react";
import '@smastrom/react-rating/style.css';
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";

const ReviewDetails = () => {
  const DetailsData = useLoaderData();
  const navigate = useNavigate();
  const { name, email, title, cover, publish, rating, Genres, _id, review } =
    DetailsData;
const {users} = useContext(AuthContext)
  const handlewatchlist = () => {
    if(users){
      console.log(DetailsData)
    const watchlist ={
      name:name,
      email:email,
      title:title,
      cover:cover,
      publish:publish,
      rating:rating,
      review:review,
      Genres:Genres,
      usersid:users?.displayName

    }
    console.log(watchlist)
      fetch(`https://cill-gamer-server.vercel.app/watchlist`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( watchlist),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: "Watchlist Added!",
            text: " Your Watchlist item  successfully added.",
            icon: "success"
          });
        });

    }
    else{
      navigate('/login')
      return

    }
    
    
  };
  
  return (
    <div className="my-7">
      <section>
        <div className="border-2 border-[#6CCDB7] bg-[#f0fffc] rounded-xl p-10 shadow-sm my-7">
          <h1 className="text-2xl font-bold text-center text-[#6CCDB7]">
            {" "}
            Details Review
          </h1>
        </div>

        <div className="border-2 rounded-xl  grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
          <div>
            <img className="rounded-l-xl h-80 w-full" src={cover} alt="" />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="flex justify-between items-center">
              <p className="border border-sky-400 text-sky-400 rounded-xl px-2 w-20 text-center bg-sky-50">
                {Genres}
              </p>
              <h5 className='flex  items-center gap-2 text-xl'>  <Rating style={{ maxWidth: 50 }} value={rating} readOnly /><span className='text-sm'>{rating}.0</span></h5>
            </div>
            <p>
              <span>description</span>:{review}
            </p>
            <div className="divider dark:text-white"></div>
            <h4>
              Reviewer:<span> {name}</span>
            </h4>
            <h4>
              Email:<span> {email}</span>
            </h4>
            <h4>Published:{publish}</h4>
           

            <div>
              <button
                onClick={handlewatchlist}
                className="btn bg-[#f0fffc] border-[#6CCDB7] text-[#6CCDB7] font-bold"
              >
                Add to WatchList
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewDetails;
