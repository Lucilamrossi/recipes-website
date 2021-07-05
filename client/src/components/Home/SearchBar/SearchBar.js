import React, { useState } from "react";
import { connect } from "react-redux";
import { setQueries } from "../../../actions/actions";
import { getRecipes } from "../../../actions/getRecipes";
import { queryHandler } from '../../../utils/queryHandler';
import '../../main.css';
import './SearchBar.css';


export function SearchBar ({getRecipes, setQueries, queries}) {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let updatedQuery = queryHandler(queries, search, 'name');

        setQueries(updatedQuery);
        getRecipes(updatedQuery);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className='searchBar' id="search" value={search} onChange={handleChange} placeholder='Search...'/>
                <input type='submit' className='search-btn' value='Send'/>
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        queries: state.queries
    };
};

export default connect(mapStateToProps, {getRecipes, setQueries})(SearchBar);