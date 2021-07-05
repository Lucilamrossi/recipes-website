import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getRecipeDetail } from "../../actions/getRecipeDetail";
import NoImg from '../../img/food20.jpg';
import '../main.css';
import './RecipeDetails.css';



export function RecipeDetails ({match, recipeDetails, loading, getRecipeDetail, error}) {

  useEffect(() => {
    getRecipeDetail(match.params.idRecipe);
  }, []);
    
    return (  
      <div className='details'>

        {error ? <h2 className='loading-error' id='error'>An error has occurred, please try again.</h2> :
        loading ? <h2 className='loading-error details-load'>Loading...</h2> : 
        
        <div className='details-info'>

          <div className='title-img-summary'>  

            {recipeDetails.img ? <img className='details-img' src={recipeDetails.img} alt='not found'/> :
              <img className='details-img' src={NoImg} alt='not found'/>}
            
            <div className='title-summary'>
              <h2 className='details-title'>{recipeDetails.name}</h2> 
              {recipeDetails.summary && <p className='details-summary'>{recipeDetails.summary}</p>}
            </div>

          </div>

          <div className='ratings-types-steps'>
            
            <div className='types-ratings'>
              <div className='details-types'>
                <p>Recipe types: </p>
                {(recipeDetails.types && recipeDetails.types.length > 0) ? recipeDetails.types.map(type => {
                  return <span className='type'>- {type}</span> 
                }) : <span>No types were selected for this recipe</span>}
              </div>

              {(recipeDetails.rating >= 0 || recipeDetails.health_rating >= 0) &&
                <div className='details-rating'> 
                  {recipeDetails.rating >= 0 && <div><p>Rating Score:  <span>{recipeDetails.rating}%</span></p> </div>}
                  {recipeDetails.health_rating >= 0 && <div><p>Health Rating Score:  <span>{recipeDetails.health_rating}%</span></p></div>}
                </div>
              }
              
            </div>

            <div className='details-steps'>
              {recipeDetails.steps && recipeDetails.steps.length > 0 && 
              <div>
                <p>Steps:</p>
                {recipeDetails.steps.map((step, i) => {
                  return (
                    <div className='step'>
                      {recipeDetails.steps.length > 1 && <span>{i + 1}. </span>}
                      <span>{step}</span>
                    </div>
                  );
                })}
              </div>}
            </div>

          </div>
        </div>}
      </div>
    );
};


function mapStateToProps(state) {
  return {
    recipeDetails: state.recipeDetails,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, {getRecipeDetail})(RecipeDetails);

