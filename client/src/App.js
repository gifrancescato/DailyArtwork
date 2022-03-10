import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import ArtworksList from './Pages/ArtworksList';
import React from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './components/navbar';
import Favourites from './Pages/Favourites';
// import artworksEntry from './components/artworksEntry';      // <== IMPORT
import { useState } from "react";
import IsPrivate from './components/IsPrivate';



function App() {
  // const [show, setShow] = useState(true);
  return (
    <div className="App">
       <Navbar />
       <Routes>
         <Route path='/'element={<Home />} />   
         <Route path='/artworks'element={<ArtworksList />} /> 
         <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favourites' element={<Favourites />} />         
        </Routes>
    </div>
  );
}

export default App;

{/* <Route
  path="artworks"
  element={ <IsPrivate> <ArtworksList/> </IsPrivate> } 
/> */}
