import React, { useState } from 'react'
import Axios from 'axios'
import Recipe from '../components/Recipe'
import '../assets/style/search.css'
import { v4 as uuidv4 } from 'uuid' //para que se vayan errores de key



const Search = () => {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const APP_ID = 'a18dffae';
  const APP_KEY = 'a67c1e365f5287b3522b9f488d992d55';
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=healthy&app_id=${APP_ID}&app_key=${APP_KEY}`;
  

  const getData = async () => {
    const result = await Axios.get(url)
    setRecipes(result.data.hits)
    console.log(result)
    setQuery('') 
  }

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <div className='search-container'>
     
      <form
        onSubmit={onSubmit}
        className="search-form"
      >
        <input
          className="search-title"
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          minLength= {2}
          placeholder="  Search Food "
        />
        <input className="search-title" type="submit" value="Search" />
      </form>
      <div className="container-recipes">
        { recipes.map((recipe)=> <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  )
}

export default Search
