import { useState } from "react";
import "./App.css"

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayDogImage, setDisplayDogImage] = useState(null);

  const [displayImages, setDisplayImages] = useState([]);
  const [message, setMessage] = useState("");

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };


  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDisplayDogImage(data.message);

    }
    catch (error) {
      console.log(error);
    }
  }

  // fetch functions -> fetch a random single image
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);

      const data = await response.json();

      const filePromises = data.map(async (filename) => {
        const fileResponse = await fetch(`http://localhost:8000/fetch//file/${filename}`);
        const fileblob = await fileResponse.blob();

        const imageURL = URL.createObjectURL(fileblob);
        return imageURL;
      });

      const imageURLs = await Promise.all(filePromises);
      setDisplayImages(imageURLs);


    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  const saveDogImage = async () => {
    try{
      const fileResponse = await fetch(displayDogImage);
      const blob = await fileResponse.blob();

      const formData = new FormData();

      formData.append("file", blob, "dog-image.jpg");

      const response = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log(data);
    }
    catch(error){
      console.log(error)
    }
  }


  return (
    <div>
      <p>{message}</p>
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img
            src={displayImage}
            alt="Display Image"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit">Upload Single File</button>
      </form>

      <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
      {
        (displayImages.length > 0) ?
          (
            displayImages.map((imageURL, index) => (
              <div key={index}>
                <img src={imageURL} style={{ width: '300px' }} />
              </div>
            ))
          ) :
          (
            <p>No Images to display</p>
          )
      }



      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {
        (displayDogImage &&
          (
            <div>
              <img src={displayDogImage} style={{ width: '300px' }} />
              <button onClick={saveDogImage}>Save Dog Image</button>
            </div>
          ))
      }
    </div>
  );
};

export default App;
