import React, { useState } from "react";
import Ingredients from "./Ingredients";
import "../assets/style/recipe.css"
import "../assets/style/ingredients.css"



const Recipe =({recipe}) => {
  const[show, setShow]=useState(false);

  const{label, image,url, ingredients} = recipe.recipe;

  return (
      <div className="recipe">
        <h3 className="recipe-title">{label}</h3>
        <img className="recipe-img" src={image} alt={label}/>
       
        <div className="recipe-buttons">
        <button> <a href={url} target="_blank">Link</a></button>
        <button onClick={()=>setShow(!show)} >Ingredients</button>
        </div>
        {show && <Ingredients ingredients={ingredients}/>}
      </div>
    );
  };
  export default Recipe;