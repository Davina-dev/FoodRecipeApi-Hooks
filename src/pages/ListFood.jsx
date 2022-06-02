//import axios from 'axios'
import React from 'react'
import "../assets/style/listFood.css"
import Recipe from '../components/Recipe'



const ListFood = ({recipe}) => {
  return (
    <div>
      <section className='list-hero'>
      <img src="https://media0.giphy.com/media/fxevJ9hlw0WCLimRhj/200.webp?cid=790b7611em7oakelq6xv8gnlzyfji9mrjwp9io59syrmswt4&rid=200.webp&ct=s" alt="img yummy" />
      <img src="https://media1.giphy.com/media/5Fnm2CFdTfl04Ck2cs/200.webp?cid=790b7611tqrhi6tg55uq4pn6tawf3yfxfgryalgh2ilgvwfk&rid=200.webp&ct=s" alt="img hungry dragon " />
      </section>

      {/* <section>

      <div className="container-recipes">
        <Recipe key={uuidv4()} recipe={recipe} />
      </div>
      </section> */}
      
    </div>
  )
}
export default ListFood
