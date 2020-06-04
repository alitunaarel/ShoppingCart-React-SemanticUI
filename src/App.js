import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  const [basket, setBasket] =useState(0);

  const addToBasket = () => {
    setBasket(basket+1)
  }    


  return (
    <div>
      <BrowserRouter>
        <Navbar basketNumber = {basket}/>
        <Switch>
          <Route exact path="/home"  render={() => <Home myfunc={addToBasket}/>} />
          <Route path="/about" component={About} />
        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;
