import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebace/Firebace.init';

export const AuthContext =  createContext()
const AuthProvider = ({children}) => {
    const [users,setusers] =useState(null)
    const  [loading,setloading] = useState(true)
   const name = 'bappi'
   const Provider = new GoogleAuthProvider()

  const registeruser = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginuser = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googlelogin = ()=>{
    setloading(true)
    return signInWithPopup(auth,Provider)

  }
  const updateuserData = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentuser=>{
        console.log(currentuser)
        setusers(currentuser)
        setloading(false)
      
     })
     return()=>{
         unsubscribe()
     }
  },[])

  const usersignout = ()=>{
    return signOut(auth)
  }

    const authData = {
        name,
        users,
        setusers,
        registeruser,
        loginuser,
        googlelogin ,
        usersignout,
        updateuserData ,
        loading,
        setloading,


    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;