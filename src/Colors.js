import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import ColorNavBar from "./ColorNavBar";
import ColorRouteList from "./ColorRouteLIst";


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
    <>
    <BrowserRouter>
        <ColorNavBar colors={colors.data}/>
        <div>
          <ColorRouteList colors={colors}/>

        </div>
      </BrowserRouter>
    </>
      
  );
}
  export default Colors;