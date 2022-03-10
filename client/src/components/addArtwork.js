import { useState } from "react";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function addArtwork(props) {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
 
  
  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();
 
    const requestBody = { image, description };
    axios
      .post(`/api/artworks`, requestBody)
      .then((response) => {
        // Reset the state
        setImage("");
        setDescription("");
      })
      .catch((error) => console.log(error));
  };
 
  return (
    <div className="AddImage">
      <h3>Add Artwork</h3>
 
      <form onSubmit={handleSubmit}>          {/*  <== UPDATE   */}
        <label>Image:</label>
        <input
          type="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddProject;