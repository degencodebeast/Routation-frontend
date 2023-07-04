import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./History.css";

const History = () => {
  return (
    <div className="page">
      <Navbar/>
      <div className="details-page">
        <h1>History</h1>
        <div className="search-bar">
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <h2>Choose Transaction Type</h2>
        <div className="tabs">
          <button>
            <i className="fas fa-get-pocket"></i> Interchain
          </button>
          <button>
            <i className="fas fa-arrow-right"></i> Crosschain
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default History;
