import { useState, useEffect } from "react";
import axios from "axios";
 


function artworksEntry () {
  const [fetching, setFetching] = useState(true);
  const [artworks, setArtworks] = useState([]);
 
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      console.log(response)
      setArtwork(response.data);
      setFetching(false);
    });
  }, []);
 
  return (
    <div>
      <h3>List of Artworks</h3>
      {fetching && <p>Loading ...</p>}
 
      {/* {artworks.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })} */}
    </div>
  );
}
 
export default artworksEntry;