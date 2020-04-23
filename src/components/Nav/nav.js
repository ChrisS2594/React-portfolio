import React from "react";
import "./style.css";
import { Link} from "react-router-dom";


export default function Nav() {

return(
  
  <nav id="nav" role="navigation">
  <a href="#nav" title="Show navigation">Show navigation</a>
  <a href="/" title="Hide navigation">Hide navigation</a>

  <ul>
    
    
    <li><Link to="/">Home Page</Link> </li>
    <li><Link to="/aboutme">About Me</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to ="/contact">Contact</Link></li>
  </ul>

</nav>

);
}