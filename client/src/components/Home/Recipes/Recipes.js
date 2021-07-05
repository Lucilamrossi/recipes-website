import React, { useState } from "react";
import { connect } from "react-redux";
import Recipe from './Recipe/Recipe';
import './Recipe/Recipe.css';

export  function Recipes ({recipes, loading, error}) {
  
  const [actualPage, setActualPage] = useState(1);

  const handleClick = (event) => {
    setActualPage(event.target.id);
  }

  return (
      <div>
          {error ? <h2 className='loading-error'>No recipes found</h2> :
          loading || !recipes[0] ? <h2 className='loading-error'>Loading...</h2> :  
          
          <div>

            <div className='recipes-container'>
              {recipes[actualPage -1].map((recipe, i) => {
                  return <Recipe key={i} recipe={recipe}/> 
              })}
            </div>

            <div className='page-btns'>
              <button className='p-btn' id='1' onClick={handleClick}>First Page</button>
              {actualPage > 1 && 
                <button className='p-btn' id={actualPage - 1}onClick={handleClick}>{actualPage -1}</button>}
              <p className='actual-page' id={actualPage}>{actualPage}</p>
              {actualPage < recipes.length && 
                <button className='p-btn' id={Number(actualPage) + 1} onClick={handleClick}>{Number(actualPage) +1}</button>}
              <button className='p-btn' id={recipes.length} onClick={handleClick}>Last page</button>
            </div>

          </div>}
      </div>
    );
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(Recipes);