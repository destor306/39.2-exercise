import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import ColorNavBar from "./ColorNavBar";


const Colors = () => {
const [colors, setColor] = useState({
    data: null,
    isLoading: true,
  });
  useEffect(() => {
    async function loadColor(){
      const res = await axios.get("http://localhost:5001/colors");
      setColor({
        data: res.data,
        isLoading: false,
      })
    }
    
    loadColor();
     },[]);

  if(colors.isLoading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <BrowserRouter>
        <ColorNavBar colors={colors.data}/>
        
      </BrowserRouter>
    </div>
  );
}
  export default Colors;