import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {  MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

import Recipes from './Recipes';
import Recipe from './Recipe/Recipe';

configure({adapter: new Adapter()});

describe('<Recipes />', () => {
    let wrapper;
    let store;
    const state = {
        recipes: [
            [
                {
                    name: "pizza",
                    summary: "pizza",
                    rating: 40,
                    health_rating: 50,
                    steps: [],
                    types: [],
                },
                {
                    name: "pizza",
                    summary: "pizza",
                    rating: 40,
                    health_rating: 50,
                    steps: [],
                    types: [],
                }
            ],
            [
                {
                    name: "pizza",
                    summary: "pizza",
                    rating: 40,
                    health_rating: 50,
                    steps: [],
                    types: [],
                },
                {
                    name: "pizza",
                    summary: "pizza",
                    rating: 40,
                    health_rating: 50,
                    steps: [],
                    types: [],
                }
            ]
        ]
    };
    const mockStore = configureStore();
    store = mockStore(state);

    beforeEach(() => {
        wrapper = mount(<Provider store={store}>
                            <MemoryRouter initialEntries={[ '/' ]}>
                                <Recipes />
                            </MemoryRouter>
                        </Provider>)
    });

    it('should map the amount of recipes in store and renderise one <Recipe /> for each', () => {
        expect(wrapper.find(Recipe)).toHaveLength(2);
    });
    
    it('Should have three buttons when actualPage is 1', () => {
        expect(wrapper.find('.p-btn')).toHaveLength(3);
    });
});