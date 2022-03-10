import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ArtworkCard from '../components/ArtworksCard';
// import artwork from '../components/ArtworksCard';


export default function ArtworksList() {
    const [fetching, setFetching] = useState(true);
    const [artworks, setArtworks]= useState([]);
    const [show, setShow] = useState(true);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
     
    // console.log(artworks.dcDescription)
    //get all the artworks API

    const apiURL = "https://api.europeana.eu/record/v2/search.json?query=*&wskey=medrolidit&qf=TYPE:IMAGE&qf=COMPLETENESS:10&qf=COUNTRY:EUROPE";
    // const apiURL = "https://api.europeana.eu/record/v2/search.json?media=true&profile=standard&query=*&1&theme=art&completeness=10&wskey=medrolidit"; &qf=COUNTRY:EUROPE&QF=DCLANGUAGE:EN
    // 

    useEffect(() => {
        getAllArtworks()
    }, [])

    const getAllArtworks =() => {
        //request 'api/projects'
        axios.get('http://localhost:5005/api/artworks')
        .then(response => {
            // console.log("test", response.data.edmPreview)
            setArtworks(response.data)
            setImage(response.data.edmPreview[0])
            setDescription(response.data.dcDescription[0])
        })
        .catch(err=> {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)");
        axios.get(apiURL).then((response) => {
          console.log(response.data.items[Math.floor(Math.random()*response.data.items.length)]);
          setArtworks(response.data.items[Math.floor(Math.random()*response.data.items.length)]);
          setImage(response.data.edmPreview[0])
            setDescription(response.data.dcDescription[0])
          setFetching(false);
        });
      }, []);
      
      if (image) {

      const requestBody = { image, description };
        console.log("test",requestBody)
    }

      const handleSubmit = (e) => {                          // <== ADD
        e.preventDefault();
     
        
        axios
          .post(`/api/artworks`, requestBody)
          .then((response) => {
            // Reset the state
            setImage("");
            setDescription("");
          })
          .catch((error) => console.log(error));
      };
      
    if (artworks) {
      
        return (
        <>
            
            {artworks.edmPreview && (
                <img
            src= {artworks.edmPreview[0]}
            >

            </img>
            )}

            {artworks.dcDescription && (
            <h2>
                {artworks.dcDescription[0]}
            </h2>
            )}
            
            

        <button className="buttons" onClick={() => window.location.reload(false)}>Get a new artwork</button>
        <button className="buttons" onClick={handleSubmit }>Save to favourites</button>
        <button className="buttons" onClick={event =>  window.location.href='/favourites'}>Your favourites</button>

        {/* <link to="/favourites" className="btn btn-primary">Favourites </link> */}


            
            {/* <h1>
                🏰 All the Artworks 🏰
            </h1>
            {artworks.map(project => <ArtworkCard />)} */}
        </>
    )
}
}