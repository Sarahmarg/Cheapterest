import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";
import AddPost from "../page/home";
import POST from "../page/home";
// Exercices



function App() {
  return (
    <BrowserRouter>
      <Header />
      <AddPost/>
      <POST title='Poste 1' description ='Descrption 1' image ='image 1' />
      <Switch>
      
      </Switch>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
