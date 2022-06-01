import React from "react";
import recipe from "../assets/style/recipe.css"



const Recipe =({recipe}) => {
  const{label, image,url, ingredients} = recipe.recipe;
  return (
      <div className="recipe">
        <h3 className="recipe-title">{label}</h3>
        <img className="recipe-img" src={image} alt={label}/>
       
        
        <div className="recipe-buttons">
        <button > URL</button>
        <button >Ingredients</button>
        </div>
      </div>
    );
  };
  export default Recipe;