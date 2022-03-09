import React from "react";
import { Link } from "react-router-dom";

// const linkStyles ={
//   display: "inline-flex",
//   width: "60px",
//   padding: "12px",
//   color: "purple",
//   margin: "150px 0px 0px"
  
// }

function Header() {
  return (
    <header>
      <h1>YOU'RE A QUIZZARD</h1>
        <span className="logo" >
          <img src="https://www.clipartmax.com/png/full/235-2355945_brain-thinking-clipart-clipartfox-thinking-brain-clipart.png"></img>
        </span>
        <div className="home-link">
          <Link to="/" exact >Home</Link></div>
        <div className="leaders-link">
          <Link to="leaders" exact >Leader Board</Link></div>
        
      
    </header>
)}

export default Header;
