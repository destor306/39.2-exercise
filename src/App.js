
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Navigate, Route} from 'react-router-dom';
import Dogs from './Dogs';
import Colors from './Colors';


function App() {
  
  return (
    <div className="App">
      {/* <Dogs /> */}
      <Colors />
    </div>
  );
}

export default App;
