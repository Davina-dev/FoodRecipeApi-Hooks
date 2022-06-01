import React from 'react'
import '../assets/style/header.css'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-banner">
          <h1 className='header-title'>Visit our more traditional recipes</h1>
        </div>
        <div className="clear"></div>
      </div>
      <nav>
      <div className="site-title">Traditional Recipes</div>
        <ul>
            <li><a href="/archive">List Recipe</a></li>
            <li><a href="/events"> Source </a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
