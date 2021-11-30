import React from 'react';
import './App.css';
import {  } from 'module';
import Header from "../components/Header";
import PostsPage from '../pages/Posts';

function App() {

    return (
      <div className="App"> 
      <Header />
      <PostsPage title='Post :' description ='Description :' image ='https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60' motscles ='Mot Clés :'/>
      </div>

    );
}

export default App