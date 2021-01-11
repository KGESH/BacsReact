import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Story from "./routes/Story";
import FAQ from "./routes/Faq";
import Business from "./routes/Business"
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return <HashRouter>
    <Header />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/Story" component={Story}/>
    <Route path="/Business" component={Business}/>
    <Route path="/FAQ" component={FAQ}/>

    
    <Footer />
  </HashRouter>
}

export default App;