import React from "react";
import { connect } from "react-redux";
import { uploadRecipes } from "../../../actions/actions";
import { ratingOrder, halthRatingOrder } from '../../../utils/ratingOrderHandler';
import { alfabeticOrder } from '../../../utils/alfabeticOrderHandler';
import { undoPages } from '../../../utils/pages';
import './Order.css';


export function Order ({recipes, uploadRecipes}) {

    const handleChange = (event) => {
        recipes = undoPages(recipes);

        let orderedRecipes = recipes;
        
        if(event.target.value === 'alf_asc') {
            orderedRecipes = alfabeticOrder(recipes, 'asc');
        } 
        if(event.target.value === 'alf_des') {
            orderedRecipes = alfabeticOrder(recipes, 'desc');
        } 
        if(event.target.value === 'rat_asc') {
            orderedRecipes = ratingOrder(recipes, 'asc');
        } 
        if(event.target.value === 'rat_des') {
            orderedRecipes = ratingOrder(recipes, 'desc');
        }
        if(event.target.value === 'hrat_asc') {
            orderedRecipes = halthRatingOrder(recipes, 'asc');
        }
        if(event.target.value === 'hrat_des') {
            orderedRecipes = halthRatingOrder(recipes, 'desc');
        }

        uploadRecipes(orderedRecipes);
    };

    return (
        <div>
            <select className='order' name="order" onChange={handleChange}>
                <option value="none" disabled selected>Order by</option>
                <option value="alf_asc">Alphabetically &#5123;</option>
                <option value="alf_des">Alphabetically &#5121;</option>
                <option value="rat_asc">Rating &#5123;</option>
                <option value="rat_des">Rating &#5121;</option>
                <option value="hrat_asc">Health Rating &#5123;</option>
                <option value="hrat_des">Health Rating &#5121;</option>
            </select>
        </div>
    );
};


function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    };
};

export default connect(mapStateToProps, {uploadRecipes})(Order);