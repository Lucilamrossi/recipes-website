import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { setQueries } from "../../../actions/actions";
import { getRecipes } from "../../../actions/getRecipes";
import { getTypes } from "../../../actions/getTypes";
import { queryHandler } from '../../../utils/queryHandler';
import './TypesFilter.css';
import '../../main.css';

export function TypesFilter ({getRecipes, getTypes, setQueries, types, queries}) {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleChange = (event) => {
        if(event.target.checked) {
            setSelectedTypes([...selectedTypes, event.target.value]);
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== event.target.value));
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let newQuery = selectedTypes.join(',');
        let updatedQuery = queryHandler(queries, newQuery, 'types');

        setQueries(updatedQuery);
        getRecipes(updatedQuery);
    };

    useEffect(() => {
        getTypes();
    }, []);

    return (
        <div className='types-form'>
            <form onSubmit={handleSubmit} >
                {types.map(type => {
                    return (
                        <div className='types-form-checkbox'>
                            <label for={type}><input type='checkbox' id={type} value={type} onChange={handleChange}/>{type}</label>
                        </div>
                    );     
                })}
                <div className='btn-container'>
                    <input className='primary-btn' type='submit' value='Apply' />
                </div>
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        types: state.types,
        queries: state.queries
    };
};

export default connect(mapStateToProps, {getRecipes, getTypes, setQueries})(TypesFilter);