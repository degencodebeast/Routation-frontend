import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/NavBar";

import bitcoinImage from "./components/bitcoin.png";
import polyImage from "./components/matic.jpg";
import ftmImage from "./components/ethereum.jpg";
import routerImage from "./components/binanceusd.png";
import avaxImage from "./components/tetherusd.jpg";

import './Explore.css';

const collectionsData = [
  {
    id: 1,
    name: "bscNFT",
    image: bitcoinImage,
    items: 4,
  },
  {
    id: 2,
    name: "polyNFT",
    image: polyImage,
    items: 5,
  },
  {
    id: 2,
    name: "ftmNFT",
    image: ftmImage,
    items: 1,
  },
  {
    id: 2,
    name: "routerNFT",
    image: routerImage,
    items: 15,
  },
  {
    id: 2,
    name: "avaxNFT",
    image: avaxImage,
    items: 5,
  },
];

const Explore = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <h1>Explore Collections</h1>
      <div className="collection-list">
        {collectionsData.map((collection) => (
          <Link to={`/collection/${collection.id}`} key={collection.id}>
            <div className="collection-box">
              <img src={collection.image} alt={collection.name} />
              <h2>{collection.name}</h2>
              <p>{collection.items} items</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Explore;
