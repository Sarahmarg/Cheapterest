import React from 'react';
import './App.css';
import PostsPage from '../pages/Posts';
import Header from '../components/Header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nath from "../pages/Nath"

//L'arborescence de la page jouter un post
function App() {

    return (
      <div>
        <Header/>
          <div className="App"> 
            
            <Router>
              <Switch>
                <Route exact path="/Nath">
                  <Nath />
                </Route>
                <Route path="/addpost">
                  <PostsPage />
                </Route>
              </Switch>
            </Router>
          </div>
      </div>


    );
}

export default App