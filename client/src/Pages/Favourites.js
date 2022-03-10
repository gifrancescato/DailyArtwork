import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


import addArtwork from "../components/addArtwork"; //  <== IMPORT
 
const API_URL = "http://localhost:5005";
 
 
function FavouriteListPage() {
  const [artworks, setArtworks] = useState([]);
 
  const getAllArtworks = () => {
    axios
      .get(`/api/artworks`)
      .then((response) => setArtworks(response.data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    getAllArtworks();
  }, [] );
 
  
  return (
    <div className="FavouriteListPage">
      
      {/*    ADD     */}
      <addArtwork refreshartworks={getAllArtworks} />
      
        {artworks.map((artwork) => {
          return (
            <div className="ProjectCard card" key={artwork._id} >
              <Link to={`/artworks/${artwork._id}`}>
                <h3>{artwork.title}</h3>
              </Link>
            </div>
          );
        })}     
       
    </div>
  );
}
 
export default FavouriteListPage;

// export default function Favourites () {
    
//     return (
//         <>
//         <h1>
//             Favourites 
//         </h1>
//         <button onClick={event =>  window.location.href='/artworks'}>Back to the artworks</button>
//         </>


       
//     )
// }


// import React from 'react'
// // import artworksEntry from './components/';      // <== IMPORT
// import { useState } from "react";
// import { Link } from 'react-router-dom';


// export default function Home() {
  
//     return (
       
// <>
// <h1>
//             🏰 Home 🏰
//         </h1>

//     <Link
//   className=" text-dark"
//   // style={{ color: '#ffffff' }}
//   to="/signup"
// >
//   Sign up
// </Link>
//     <p style={{ fontSize: '25px' }}>
//     Already have an account?{' '}
//     <Link
//     className="homeHeading text-dark"
//     // style={{ color: '#ffffff' }}
//     to="/login"
//     >
//     login
//   </Link>
// </p>
// </>

       
//     )
// }