import React from "react";
import { useParams } from "react-router-dom";   
import DogDetails from "./DogDetails";

const FilterDogDetails = ({dogs}) => {
    const {name} = useParams();
    
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    return <DogDetails dogs={dog} />;
}

export default FilterDogDetails;