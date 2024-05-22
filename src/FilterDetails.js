import React from "react";
import { useParams } from "react-router-dom";   
import DogDetails from "./DogDetails";
import ColorDetails from "./ColorDetails";

const FilterDogDetails = ({dogs}) => {
    const {name} = useParams();
    
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    return <DogDetails dogs={dog} />;
}


const FilterColorDetails = ({colors})=>{
    const {name} = useParams();

    const color = colors.data.find(color => color.name.toLowerCase() === name);
    return<ColorDetails color={color} />;
}
export {FilterDogDetails, FilterColorDetails};