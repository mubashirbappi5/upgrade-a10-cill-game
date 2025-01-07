import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {googlelogin,loginuser,setloading } = useContext(AuthContext)
    const location = useLocation()
  const navigate = useNavigate()
    const handlelogin = (e)=>{
        e.preventDefault()
        const form = e. target
        const email = form.email.value
        const password = form.password.value
        
        loginuser(email,password)
        .then(res=>{
            console.log(res.user)
            form.reset()
            Swal.fire({
                title: "Login",
                text: " Welcome back! Your login was successful.",
                icon: "success"
              });
            navigate(location?.state?location.state:'/')
        })
        .catch(error => {
            form.reset()
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error"
              });

              setloading(false)
        })
    }
    const handlegooglesignin = ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                title: "Login",
                text: " Welcome back! Your login was successful.",
                icon: "success"
              });
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
        <div className='border-2 rounded-lg border-sky-200  pt-5'>
            <h1 className='text-2xl font-bold text-center'>Welcome Back <span className='text-sky-400'><Typewriter
            words={[ 'Gamer!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={400}
            deleteSpeed={50}
            delaySpeed={3000}
            
          /></span></h1>
           <section className='grid md:grid-cols-2  grid-cols-1 '>

            <div className='my-20 w-11/12 mx-auto'>
                <div className='flex flex-col items-center justify-center gap-4 '>
                    <h1 className='text-2xl font-bold'>Login Now!</h1>
                    <form onSubmit={handlelogin} className='flex flex-col  justify-center items-center gap-6'>
                        <input className='border-b w-64 dark:p-2' type="email" placeholder='Email' name="email" id="" />
                        <input className='border-b w-64 dark:p-2' type="password" placeholder='Password' name="password" id="" />
                        <div className='space-y-1'>
                        <input className='btn btn-wide bg-sky-100' type="submit" value="Login" />
                        <p className='text-xs text-center'>Don't have an account?<Link className='text-[#6CCDB7] font-bold' to={'/register'}>Register</Link></p>
                        </div>

                    </form>
                    <div className='flex flex-col justify-center items-center'>
                    <div className="divider w-60 mx-auto">OR</div>
                  
                        <button onClick={handlegooglesignin}  className="btn"><FaGoogle />Login With Google </button>
                    </div>
                </div>

            </div>
            <div className='w-11/12 mx-auto'>

                <img src="https://i.ibb.co.com/LvzTDKQ/authentication-65.png" alt="" />

            </div>




           </section>
            
        </div>
    );
};

export default Login;