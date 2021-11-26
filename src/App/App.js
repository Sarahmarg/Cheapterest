import React from 'react';
import './App.css';
import {  } from 'module';
import Header from "../components/Header";
import PostsPage from '../pages/Posts';

function App() {

    return (
      <div className="App"> 
      <Header />
      <PostsPage title='Poste 1' description ='Descrption 1' image ='https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60' />
      </div>

    );
}

export default App