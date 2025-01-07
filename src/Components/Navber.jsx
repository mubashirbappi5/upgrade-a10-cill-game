import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Themes from "./Themes";

const Navber = () => {
  const { users, usersignout, loading } = useContext(AuthContext);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
     
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out !"
    }).then((result) => {
      if (result.isConfirmed) {
        usersignout().then(() => {
          
          Swal.fire({
            title: "Log Out!",
            text: "You successfully Logout!.",
            icon: "success"
          });
        });
        
      }
    });
    
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"}>All Reviews</NavLink>
      </li>
      {
        users&&<li>
        <NavLink to={"/addReview"}>Add Review </NavLink>
      </li>
      }
      {
        users&& <li>
        <NavLink to={"/myReviews"}>My Reviews</NavLink>
      </li>
      }
      {
        users&& <li>
        <NavLink to={"/myWatchlist"}>Game WatchList</NavLink>
      </li>
      }
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/Support"}>Support Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar px-2 bg-base-100 dark:bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dark:bg-black bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="w-12 md:w-20 "
              src="https://i.ibb.co.com/9HG1Qck/Black-White-Bold-Modern-Studio-Logo-1-removebg-preview-1.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          {loading? <div>
            <div className="flex w-20 md:w-52 flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton  h-16 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton hidden md:inline h-4 w-20"></div>
      <div className="skeleton hidden md:inline h-4 w-28"></div>
    </div>
  </div>
  
</div>
          </div>:

         
         users ? (
            <div className=" flex  items-center">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none hover:bg-transparent hover:border-none">
                <div className="avatar">
                <div className="ring-primary ring-offset-base-100 md:w-16 w-10  rounded-full ring ring-offset-2">
                  <img src={users.photoURL} />
                </div>
              </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-1 shadow"
                >
                  <li>
                    <a className="text-lg font-semibold text-blue-400">{users.displayName}</a>
                  </li>
                
                </ul>
              </div>
              <button onClick={handleLogout} className="btn btn-sm mr-4">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="hidden md:flex" to={"/login"}>
                {" "}
                <button className="group relative inline-flex md:h-12 h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
                  <div className="inline-flex h-12 translate-y-0 items-center justify-center px-3 md:px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                    Login
                  </div>
                  <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                    <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#6CCDB7] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                    <span className="z-10">Login</span>
                  </div>
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="group relative inline-flex md:h-12 h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-[#6CCDB7] font-medium">
                  <div className="inline-flex h-12 translate-y-0 items-center justify-center px-3 md:px-6 text-neutral-50 transition duration-500 group-hover:-translate-y-[150%]">
                    {" "}
                    Register
                  </div>
                  <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-950 transition duration-500 group-hover:translate-y-0">
                    <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-white transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                    <span className="z-10"> Register</span>
                  </div>
                </button>
              </Link>
            </div>
          )}
        
           <Themes className="w-4" />
          
        </div>
      </div>
    </div>
  );
};

export default Navber;
