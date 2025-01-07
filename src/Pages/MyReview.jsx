import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyReviewcard from "../Components/MyReviewcard";

const MyReview = () => {
  const { users } = useContext(AuthContext);
  const [myDatas, setmyDatas] = useState([]);
  
 
  console.log(myDatas)
  useEffect(() => {
    if(users?.email){
        fetch(`https://cill-gamer-server.vercel.app/gamer/email/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setmyDatas(data));
    }
  }, [users]);
 

  return (
    <div className=" my-7 dark:text-white">
      <section>
        <div className="border-2 border-sky-200 bg-sky-50 rounded-xl p-10 shadow-sm my-7">
          <h1 className="text-2xl font-bold text-center text-sky-600">
            My Reviews
          </h1>
        </div>
        <div className="my-6" >
            <MyReviewcard myDatas={myDatas} setmyDatas={setmyDatas}></MyReviewcard>
           
        </div>
      </section>
    </div>
  );
};

export default MyReview;
