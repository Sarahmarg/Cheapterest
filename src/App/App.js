import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sarah from '../components/Sarah';
import Nath from '../components/Nath';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sarah/>}/>
          <Route path="/nathael" element={<Nath/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App