import React from "react";
import Marquee from "react-fast-marquee";
const Partners = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Our Partners</h1>

      <div className="my-12">
        <Marquee>
          <img className="ml-10 w-40 h-20" src="https://i.ibb.co.com/CsjfDhf/download.png" alt="" />
          <img className="ml-10 w-40 h-20" src="https://i.ibb.co.com/jfYJWrK/download-1.png" alt="" />
          <img className="ml-10 w-40 h-20" src="https://i.ibb.co.com/Gd1jKdB/download-2.png" alt="" />
          <img className="ml-10 w-40 h-20" src="https://i.ibb.co.com/3RwHjPX/download-3.png" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
