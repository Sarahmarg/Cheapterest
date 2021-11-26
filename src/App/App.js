import React from 'react';
import './App.css';
import {  } from 'module';
import Header from "../components/Header";
import PostsPage from '../pages/Posts';

function App() {

    return (
      <div className="App"> 
      <Header />
      <PostsPage title='Poste 1' description ='Descrption 1' image ='image 1' />
      </div>

    );
}

export default App