import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./Navigation";

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
  </HashRouter>
}

export default App;