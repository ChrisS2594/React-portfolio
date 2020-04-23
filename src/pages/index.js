import React from "react";
// import { Route, Router, Link} from "react-router-dom";
import "./../assets/images/portfolio.jpg";
// import Portfolioimg from "./portfolio";
import "./../App.css";
import Portfolio from "./../assets/images/portfolio.jpg";
export default function index() {
return(
 <div className="kansas">
   <h2>Welcome</h2>
    
      <img src={Portfolio} className="picture" alt="profile" />
    
    <p>Hello! My name is Christopher Stephens and welcome to my portfolio. I am a hard working individual who enjoys figuring out how things work. Which is what led me to become interested in coding and development. I like seeing the innerworkings of something and trying to understand the reasoning behind why it works the way it does.  </p>
      
 </div>




);
}
