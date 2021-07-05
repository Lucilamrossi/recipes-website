import React, { useState } from "react";
import { connect } from "react-redux";
import { setQueries } from "../../../actions/actions";
import { getRecipes } from "../../../actions/getRecipes";
import { queryHandler } from '../../../utils/queryHandler';
import './RatingFilter.css';
import '../../main.css';

export function RatingFilter ({getRecipes, setQueries, queries}) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [hMin, setHMin] = useState(0);
    const [hMax, setHMax] = useState(100);
    const [rangeError, setRangeError] = useState(false);

    const handleChange = (event) => {
        if(event.target.id === 'min') {
            setMin(event.target.value);
        }
        if(event.target.id === 'max') {
            setMax(event.target.value);
        }
        if(event.target.id === 'Hmin') {
            setHMin(event.target.value);
        }
        if(event.target.id === 'Hmax') {
            setHMax(event.target.value);
        }
        if(Number(min) <= Number(max) && Number(hMin) <= Number(hMax)){
            setRangeError(false);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if((Number(min) >= Number(max)) || (Number(hMin) >= Number(hMax))) {
            setRangeError(true);
        } else {
            let updatedQuery = queryHandler(queries, min, 'minRating');
            updatedQuery = queryHandler(updatedQuery, max, 'maxRating');
            updatedQuery = queryHandler(updatedQuery, hMin, 'minHrating');
            updatedQuery = queryHandler(updatedQuery, hMax, 'maxHrating');

            setQueries(updatedQuery);
            getRecipes(updatedQuery);
        };
    };

    return (
        <div className='rating-filter'>

            <form onSubmit={handleSubmit}>

                <div className='rating-filter-top'>
                    <label for="min">Rating <span>(0 - 100)</span>:</label>
                    <div>
                        <span>min:</span>
                        <input className='rating-filter-box' type="number" id="min" min="0" max='100' onChange={handleChange}/>
                        <span>max:</span>
                        <input className='rating-filter-box' type="number" id="max" min="0" max="100" onChange={handleChange}/>
                    </div>
                </div>
                
                <div className='rating-filter-bottom'>
                    <label for="min">Health Rating <br></br><span>(0 - 100)</span>:</label>
                    <div>
                        <span>min:</span>
                        <input className='rating-filter-box' type="number" id="Hmin" min="0" max='100' onChange={handleChange}/>
                        <span>max:</span>
                        <input className='rating-filter-box' type="number" id="Hmax" min="0" max="100" onChange={handleChange}/>
                    </div>
                </div>
                
                <div className='btn-container'>
                    <input className='primary-btn' type='submit' value='Apply'/>
                </div>
            </form>
            {rangeError && <div className='rating-filter-error'>The rating range is not correct</div>}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        queries: state.queries
    };
};

export default connect(mapStateToProps, {getRecipes, setQueries})(RatingFilter);