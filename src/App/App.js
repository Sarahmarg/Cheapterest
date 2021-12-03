import React, { useState } from 'react';
import './App.css';
import PostsPage from '../pages/Posts';
import Header from '../components/Header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/Home"

//L'arborescence de la page jouter un post
function App() {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, item])
  }
  

  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home posts={items} />
            </Route>
            <Route path="/addpost">
              <PostsPage onSubmit={addItem} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>


  );
}

export default App