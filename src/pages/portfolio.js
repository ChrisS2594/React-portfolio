import React from "react";

import "../index.css";
import { Link } from "react-router-dom";


export default function Portfoliopg() {
  
return(
<div  className="keith">
<h1> Group Projects</h1>

<ul>
  <li><Link to="HTTPS://chriss2594.github.io/Project-1-C1/">Group Project 1: Travel Application</Link></li>
  <li><Link to="#">Group Project 2: Rate My Roomie </Link></li>
  <li><Link to="#">Group Project 3: Ocean Consercation (Using React)</Link></li>
</ul>
<br />
<h1>Personal Projects and Assignments</h1>
<ul>
<li><Link to="#">to be updated</Link></li>
  <li><Link to="#">to be updated</Link></li>
  <li><Link to="#">to be updated</Link></li>
</ul>
</div>


);
}

