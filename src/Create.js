import React from "react";
import "./Create.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Create = () => {
    return (
    <div className="pages">
      <div className="details-page">
        <Navbar/>
        <div className="content-wrapper">
          {/* <h1>Create</h1> */}
          <div className="section">
            <h2>Upload Image</h2>
            <p>Drag or choose your file to upload.</p>
            <div className="upload-image-box">
              {/* <p>JPG, PNG, SVG. Max Size 100MB.</p> */}
              <input type="file" accept="image/*" />
            </div>
            <h2>Name</h2>
            <input
              type="text"
              className="name-input"
              placeholder="Item Name"
            />
            <h2>Description</h2>
            <p>The description will be included on the item's detail page underneath its image. </p>
            <textarea
              className="description-input"
              placeholder="Write a suitable description for your item."
            ></textarea>
            <h2>Blockchain Category</h2>
            <select>
              <option value="">Choose an option</option>
              <option value="option1">BSC</option>
              <option value="option1">Polygon</option>
              <option value="option1">Fantom</option>
              <option value="option1">Router</option>
              <option value="option1">Avalanache</option>
            </select>
            <button className="create-button">Create</button>
          </div>     
        </div>
      </div>
      {/* <Footer/> */}
      </div>
    );
  };
  
  export default Create;
  