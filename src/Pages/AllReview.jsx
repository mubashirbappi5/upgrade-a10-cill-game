import React, {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";
import Loading from "../Components/Loading";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllReview = () => {
  const allreview = useLoaderData();
  const [sortBy, setSortBy] = useState(""); 
  const [selectedGenre, setSelectedGenre] = useState(""); 
  const {loading} = useContext(AuthContext)
  
 
  const filteredAndSortedReviews = allreview.filter(review=>{if(!selectedGenre)return true;
    return review.Genres === selectedGenre})
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "publish") return new Date(b.publish) - new Date(a.publish);
      return 0; 
    });
  
  if(loading){
    return <div className='flex h-screen justify-center'><Loading></Loading></div>
  }
   

  return (
    <div className="">
      <div className="border-2 border-sky-200 bg-sky-50 rounded-xl p-10 shadow-sm my-7">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          All Reviews
        </h1>
        <h1>{}</h1>
      </div>

      <div className="flex justify-between items-center border p-4">
        <div>
          <h1 className="text-xl text-sky-500 font-bold">Total Review:({filteredAndSortedReviews.length})</h1>
        </div>
        <div className="flex gap-4">
          <select
            className="block py-2.5  rounded-lg w-full text-sm text-sky-500 bg-transparent p-2 border-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            defaultValue="SortBy"
            name="SortBy"
            onChange={(e) =>{
              e.preventDefault()
              setSortBy(e.target.value)
            }}
          >
            <option className="text-sky-600" value="SortBy" disabled>
             Sort By
            </option>
            <option value="rating">Rating</option>
            <option value="publish">Year</option>
           
          </select>
          <select
            className="block py-2.5  rounded-lg w-full text-sm text-sky-500 bg-transparent p-2 border-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            defaultValue='Genres'
            name="genres"
            onChange={(e) =>{
              e.preventDefault()
              setSelectedGenre(e.target.value)}}
          >
            <option className="text-sky-600" value="Genres" disabled>
            Genres
            </option>
            <option value="action">Action</option>
            <option value="rpg">Rpg</option>
            <option value="adventure">Advengers</option>
           
          </select>
        </div>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 my-7">
        {filteredAndSortedReviews  .map((reviews) => (
          <AllReviewCard reviews={reviews}></AllReviewCard>
        ))}
      </section>
    </div>
  );
};

export default AllReview;
