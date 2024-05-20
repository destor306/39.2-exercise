
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Navigate, Route} from 'react-router-dom';
import axios from 'axios';
import Dogs from './Dogs';
import Colors from './Colors';
import RouteList from './RouteList';
import NavBar from './NavBar';
import ColorNavBar from './ColorNavBar';


function App() {
  
  return (
    <div className="App">
      <Dogs />
      <Colors />
    </div>
  );
}

export default App;
