import React from "react";
import { Link } from 'react-router-dom';

import '../CreationRecipe.css';

export function CreatedRecipe ({  recipeCreated, handleNewRecipe }) {

    return (
        <div className='created-recipe'> 
            <p>You have successfully created the recipe  
                <Link to={'/app/recipe/' + recipeCreated.id} className='recipe-link-title'><i> "{recipeCreated.name}" </i></Link></p> 
            <div>
                <button id='new-recipe-btn' onClick={handleNewRecipe}>Create a new recipe</button>
                <Link exact to="/app/home" id='backHome'>Go back home</Link>
            </div>
        </div>
)};