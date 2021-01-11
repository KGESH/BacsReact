import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./Header"
import Footer from "./Footer"

function App() {
  return <HashRouter>
    <Header />
    <Route path="/" exact={true} component={Home}/>
    <Footer />
  </HashRouter>
}

export default App;