import React from "react";
import { Navigate } from "react-router-dom";

const ColorDetails = ({ color }) => {
    if (!color) return <Navigate to="/colors" />;
      return (
        <div>
            <h1>{color.name}</h1>
            <img src={color.src} alt={color.name} />
    
            <h3>Facts:</h3>
            <ul>
                {color.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
        
    );
}

export default ColorDetails;