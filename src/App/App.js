import React from 'react';
import './App.css';
import PostsPage from '../pages/Posts';
import Header from '../components/Header/header';

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