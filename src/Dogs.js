import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import RouteList from "./RouteList";


const Dogs = () => {
const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
  });
  useEffect(() => {
    async function loadDogs(){
      const res = await axios.get("http://localhost:5001/dogs");
      setDogs({
        data: res.data,
        isLoading: false,
      })
    }
    
    loadDogs();
     },[]);

  if(dogs.isLoading) return <h1>Loading...</h1>;
  return (
    <>
    <BrowserRouter>
        <NavBar dogs={dogs.data}/>
        <div>
          <RouteList dogs={dogs.data}/>
        </div>
      </BrowserRouter>
    </>
      
  );
}
  export default Dogs;