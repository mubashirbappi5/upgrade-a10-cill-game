import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { data, Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const MyReviewcard = ({myDatas,setmyDatas }) => {
 
  
const navigate = useNavigate()
  const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://cill-gamer-server.vercel.app/gamer/${id}`,{
                method:"DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res=>res.json())
            .then(data=>{
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                 
                  const remaingsmydata = myDatas.filter(myreview => myreview._id !== id)
                  setmyDatas(remaingsmydata)
            })
          
        }
      });
   

  }
 
  return (
    <div className=" w-11/12 mx-auto">

      
    






      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="dark:text-white">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Title</th>
        <th>Publish</th>
        <th>Rating</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    {myDatas.map(({ _id, name, title, cover, rating, publish }) => (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={cover}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {publish}
        </td>
        <td>{rating}</td>
        <th>
        <Link to={`/updateReview/${_id}`} >
          <button
            type="button" 
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
             <MdEdit />
            
        </button>
           
           </Link>
        </th>
        <th>
        <button
          onClick={()=>handleDelete(_id)}
            type="button"
           className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-blue-500"
          >
             <MdDeleteForever />
            
         </button>
        </th>
      </tr>
     
     
    </tbody>
       ))}
   
    
  </table>
</div>
      
    </div>
  );
};

export default MyReviewcard;
