import React from 'react';
import Index from "./pages/index";
import "./App.css";
import Portfoliopg from "./pages/portfolio";
import Nav from "./components/Nav/nav";
import Contact from "./pages/contact";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/aboutme";
import Foot from "./components/foot/foot";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Profile</h1>
      </header>
      <Nav />
      <div>
        
        

        
        <Route exact path="/" component={Index} />
        <Route exact path="/portfolio" component={Portfoliopg} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutme" component={About} />
      </div>
      </div>
      <Foot />
      </Router>
  );
}

export default App;
