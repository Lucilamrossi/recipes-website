import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import validator from 'validator';

import { postRecipe } from "../../actions/postRecipe";
import { getTypes } from "../../actions/getTypes";

import { TypesForm } from "./Types/TypesForm"
import { Steps } from "./Steps/Steps"
import { CreatedRecipe } from "./CreatedRecipe/CreatedRecipe"

import './CreationRecipe.css';


export function CreationRecipe ({ recipeCreated, types, loading, error, postRecipe, getTypes }) {
  const [recipe, setRecipe] = useState({});
  const [valideURL, setValideURL] = useState(true);
  const [hasSubmit, setHasSubmited] = useState(false);

  useEffect(() => {
    getTypes();
  }, []);

  const handleTypesCallBack = (selectedTypes, createdTypes) => {
    const checkedCreatedTypes = createdTypes.filter(type => type !== '');
    types = [...selectedTypes, ...checkedCreatedTypes];
    
    setRecipe({
      ...recipe,
      types
    })
  }

  const handleStepsCallBack = (steps) => {
    setRecipe({
      ...recipe,
      steps
    })
  }

  const handleGeneralChange = (event) => {
    setRecipe({ 
      ...recipe,
      [event.target.id]: event.target.value 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postRecipe(recipe);
    setHasSubmited(true);
  };

  //Image handler:
  const handleImageChange = (event) => {
    if(validator.isURL(event.target.value)) {
      setValideURL(true);
      setRecipe({ 
        ...recipe,
        [event.target.id]: event.target.value 
      });
    } else setValideURL(false);
  };
  
  //New recipe after new recipe
  const handleNewRecipe = () => {
    setHasSubmited(false);
  };

  return (
    <div className='creation'>

      { error ? <h2 className='loading-error'>An error has occurred, please try again</h2> : 
        loading ? <h2 className='loading-error'>Loading...</h2>: 
        !hasSubmit ? 
        <div className='father'>
          <p id='create'>Create your Recipe!</p>
        
          <div className='background'>
            <form  onSubmit={handleSubmit}>
              <div className='creation-form'>
                
                <div className='creation-title general-form'>
                  <label><span className='required'>*</span>Title: </label>
                  <input type="text" id='name' required onChange={handleGeneralChange}/>
                </div>
          
                <div className='creation-summary general-form'>
                  <label><span className='required'>*</span>Summary:</label>
                  <textarea rows='10' id='summary' required onChange={handleGeneralChange}></textarea>
                </div>
                
                <div className='creation-rating-img'>

                  <div className='creation-rating'>
                    <label>Rating:</label>
                    <input type='number' id='rating' min='0' max='100' onChange={handleGeneralChange}/>
                  </div>
                  
                  <div className='creation-rating'>
                    <label>Health Rating:</label>
                    <input type='number' id='health_rating' min='0' max='100' onChange={handleGeneralChange}/>
                  </div>
                  
                  <div className='creation-img'>
                    <label>Image <span>(url):</span></label>
                    <input type='url' id='img' onChange={handleImageChange}/>
                    {!valideURL && <span className='error'>The image input should be a valid URL</span>}
                  </div>

                </div>
              </div>
              
              <div className='creation-types-steps-submit'>
                
                <TypesForm types={types} handleTypesCallBack={handleTypesCallBack}/>
                
                <Steps handleStepsCallBack={handleStepsCallBack}/>

                <input id='submit' type='submit' value='Create'/>
              </div>

            </form> 
          </div>
        </div>
      : <CreatedRecipe recipeCreated={recipeCreated} handleNewRecipe={handleNewRecipe}/>
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    recipeCreated: state.recipeCreated,
    types: state.types,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, {postRecipe, getTypes})(CreationRecipe);


