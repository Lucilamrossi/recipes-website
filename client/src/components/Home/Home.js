import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setQueries } from "../../actions/actions";
import { getRecipes } from "../../actions/getRecipes";
import './Home.css';

import Recipes from './Recipes/Recipes';
import Order from './Order/Order';
import TypesFilter from './Filters/TypesFilter';
import RatingFilter from './Filters/RatingFilter';
import SearchBar from './SearchBar/SearchBar';


export function Home ({getRecipes, setQueries}) {

  useEffect(() => {
    getRecipes();
    setQueries('');
  }, []);
    
    return (
      <div className='home'>
        
        <div className='filters'>
          <div className='filters-child'>
            <TypesFilter/>
            <hr className='home-hr'/>
            <RatingFilter/>
          </div>
          
        </div>

        <div className='recipes'>
          <h1>Recipes</h1>
          <div className='recipes-search'>
            <Order/>
            <SearchBar/>
          </div>
          <Recipes />
        </div>
      </div>
    );
};

export default connect(null, {getRecipes, setQueries})(Home);
