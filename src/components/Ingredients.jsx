//import axios from 'axios'
import React from 'react'

import { v4 as uuidv4 } from "uuid";




  const Ingredients = ({ ingredients }) => {
    return ingredients.map(ingredient => {
      return (
        <ul key={uuidv4()} className="ingredient-list">
          <li className="ingredient-text">{ingredient.text}</li>
          <li className="ingredient-weight">Weight: {ingredient.weight}</li>
        </ul>
      );
    });
  };

export default Ingredients
