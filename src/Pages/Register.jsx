import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Register = () => {
  const {googlelogin, registeruser,updateuserData , setloading } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);


  const handleregister = (e)=>{
    e.preventDefault()
    const form = e.target 
    const name = form.name.value
    const email = form.email.value
    const photoUrl = form.photoURL.value
    const password = form.password.value
    const passwordChacker = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!passwordChacker.test(password)){
      alert("")
      Swal.fire({
        title: "Invalid password",
        text: " must use one Capital & small letter and also must password length 6 .",
        icon: "error"
      });
      
      return
    }


    registeruser(email,password)
    .then(res=>{
      console.log(res.user)
      form.reset()
      Swal.fire({
        title: "Sign UP",
        text: " Welcome! Your registration was successful.",
        icon: "success"
      });
      const profile = {
        displayName: name,
        photoURL: photoUrl
      }
      updateuserData(profile)
      .then(res=>{
        console.log(res.user)
        
      })
      .catch(error=>{
        console.log(error.message)
      })
      navigate('/')
    })
    .catch(error => {
      console.log(error.message)
      setloading(false)
      form.reset()
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error"
      });
    })
    
  }
  const handlegooglesignin = ()=>{
    googlelogin()
    .then(res=>{
       
     console.log(res.user)
     
     Swal.fire({
      title: "Sign UP",
      text: " Welcome! Your registration was successful.",
      icon: "success"
    });
     navigate('/')
    })
    .catch(error=>{
        console.log(error.message)
       
        
    })

}
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Let's get you  <span className='text-[#6ccdb7]'><Typewriter
            words={[ 'started!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={400}
            deleteSpeed={50}
            delaySpeed={3000}
            
          /></span></h1>
      <section className="grid  grid-cols-1 md:grid-cols-2">
        <div className="w-11/12 mx-auto">
          <img src="https://i.ibb.co.com/wMG3w2v/4966434.jpg" alt="" />
        </div>
        <div>

        <div className='my-20 '>
                <div className='flex flex-col items-center justify-center gap-4 '>
                    <h1 className='text-2xl font-bold'>Register Now!</h1>
                    <form onSubmit={handleregister} className='flex flex-col  justify-center items-center gap-6'>
                        <input className='border-b w-64 focus:outline-none dark:p-2' type="text" placeholder='Name' name="name" id="" />
                        <input className='border-b w-64 focus:outline-none dark:p-2' type="email" placeholder='Email' name="email" id="" />
                        <input className='border-b w-64 focus:outline-none dark:p-2' type="text" placeholder='PhotoURL' name="photoURL" id="" />
                       <div className="  relative">
                       <input className='  border-b w-64 focus:outline-none  dark:p-2' type={showPassword ? 'text' : 'password'} placeholder='Password' name="password" id="" />
                       <button onClick={(e) =>{e.preventDefault(),setShowPassword(!showPassword)} } className="btn absolute right-2  btn-xs bg-transparent border-none"> {showPassword?<FaEyeSlash />:<FaEye />}</button>
                       </div>
                        <div className='space-y-1'>
                        <input className='btn btn-wide bg-sky-100' type="submit" value="Register" />
                        <p className='text-xs text-center'>Already have an account?<Link className='text-[#6CCDB7] font-bold' to={'/login'}>Login</Link></p>
                        </div>

                    </form>
                    <div className='flex flex-col justify-center items-center'>
                    <div className="divider w-60 mx-auto">OR</div>
                  
                        <button onClick={handlegooglesignin}  className="btn"> <FaGoogle />Login With Google </button>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
