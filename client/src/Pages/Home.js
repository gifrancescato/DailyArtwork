import React from 'react'
// import artworksEntry from './components/';      // <== IMPORT
import { useState } from "react";
import { Link } from 'react-router-dom';



export default function Home() {
  
return (
       
<>
  <div className="auth-wrapper">
    <div className="auth-box">
          {/* <img
            className="w-100 homepageImage"
            src="/public/statue.jpeg"
          ></img> */}
        <h1 className="title" >
            Daily Artworks
        </h1>

        <div className="auth-form">
      
          <Link
  className="buttons"
  style={{ color: 'palevioletred' }}
  to="/signup"
>
  Sign up
</Link>
    <p style={{ fontSize: '15px' }}>
    Already have an account?{' '}
    <Link
    className="buttons"
    style={{ color: 'palevioletred' }}
    to="/login"
    >
    login
  </Link>
</p>
        </div>
    </div>
  </div>
</>

       
    )
}


