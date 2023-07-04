import React from "react";
import { useParams } from "react-router-dom";

const Collection = ({ collectionsData }) => {
  const { id } = useParams();
  const collection = collectionsData.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h1>Collection Profile</h1>
      <div>
        <img src={collection.image} alt={collection.name} />
        <h2>{collection.name}</h2>
        <p>{collection.description}</p>
      </div>
    </div>
  );
};

export default Collection;
