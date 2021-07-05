import React from "react";
import { Link } from 'react-router-dom';
import NoImg from '../../../../img/food20.jpg';
import './Recipe.css';

export default function Recipe ({recipe}) {
  
    return (
      <div className='recipe'>

          <div className='recipe-title'>
            <h2>{recipe.name}</h2>
          </div>
          
          <div className='recipe-types-container'>

            {recipe.types.length > 0 ?
              <div className='recipe-types'>
                <span>Type of recipe:</span>
                {recipe.types.map((type, i) => {
                  return <p className='types' key={i}>- {type}</p>
                })}
              </div> : 
              
              <div className='recipe-types'>
                <span>Type of recipe:</span>
                <i><p>No types were selected for this recipe</p></i>
              </div>
            }

          </div>
          
          <div className='rating-container'>
              {recipe.rating >= 0 && <p><span>Rating:</span><br/> {recipe.rating}%</p>}
              {recipe.health_rating >= 0 && <p><span>Health:</span><br/> {recipe.health_rating}%</p>}
          </div>
        
          <div className='view-more'>
            <Link to={'/app/recipe/' + recipe.id} >
              <button className='primary-btn'>View more!</button>
            </Link>
          </div>
          
          <div className='recipe-img-father'>
            <div className='recipe-img-container'>
              {recipe.img ? <img className='recipe-img' src={recipe.img} alt='not found'/> :
              <img className='recipe-img' src={NoImg} alt='img not found'/>}
            </div>
          </div>
        
      </div>
    );
};
