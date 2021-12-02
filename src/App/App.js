import React from 'react';
import './App.css';
import PostsPage from '../pages/Posts';
import Header from '../components/Header/header';

//L'arborescence de la page jouter un post
function App() {

    return (
      <div>
        <Header/>
          <div className="App"> 
            <PostsPage />
          </div>
      </div>

    );
}

export default App