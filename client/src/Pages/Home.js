import React from 'react'
// import artworksEntry from './components/';      // <== IMPORT
import { useState } from "react";
import { Link } from 'react-router-dom';



export default function Home() {
  
    return (
       
<>

<h1 className="title" >
            🏰 Home 🏰
        </h1>

    <Link
  className=" text-dark"
  // style={{ color: '#ffffff' }}
  to="/signup"
>
  Sign up
</Link>
    <p style={{ fontSize: '25px' }}>
    Already have an account?{' '}
    <Link
    className="buttons"
    style={{ color: '#ffffff' }}
    to="/login"
    >
    login
  </Link>
</p>
</>

       
    )
}


