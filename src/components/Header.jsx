import React from 'react'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-banner">
          <h1 className="header-title">Visit our more traditional recipes</h1>
        </div>
        <div className="clear"></div>
      </div>
      <nav>
        <div className="site-title">Traditional Recipes</div>
        <ul>
          <li>
            <Link to={"/ListFood"}>List Recipe</Link>
          </li>
          <li>
            <a href="https://github.com/Davina-dev/FoodRecipeApi-Hooks"> Source </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davinamedina/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
