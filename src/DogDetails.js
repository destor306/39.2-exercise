import React from "react";
import { Navigate, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    if (!dogs) return <Navigate to="/dogs" />;
      return (
        <div>
            <h1>{dogs.name}</h1>
            <img src={dogs.src} alt={dogs.name} />
            <h3>Age: {dogs.age}</h3>
            <h3>Facts:</h3>
            <ul>
                {dogs.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
        
    );
}

export default DogDetails;