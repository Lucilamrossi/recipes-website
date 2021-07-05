import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from "redux-mock-store";
import CreationRecipe from './CreationRecipe.js';
import thunk from 'redux-thunk';

const middlewares = [thunk];


configure({adapter: new Adapter()});

describe('Creation Recipe', () => {

    describe('<CreationRecipe />', () => {
        let wrapper;
        let store;
        const testStore = {
            recipeCreated: {},
            types: ['vegetarian', 'vegan', 'gluten free'],
            loading: false,
            error: false
        };
        beforeEach(() => {
            const mockStore = configureStore(middlewares);
            store = mockStore(testStore);
            wrapper =  mount(<CreationRecipe store={store}/>);
            store.clearActions();
        })
        
        it('Should contain all elements', () => {
            expect(wrapper.find('.creation-title')).toHaveLength(1);
            expect(wrapper.find('.creation-summary')).toHaveLength(1);
            expect(wrapper.find('.creation-rating')).toHaveLength(2);
            expect(wrapper.find('.creation-img')).toHaveLength(1);
            expect(wrapper.find('.creation-types')).toHaveLength(1);
            expect(wrapper.find('.creation-newTypes')).toHaveLength(1);
            expect(wrapper.find('.creation-steps')).toHaveLength(1);
            expect(wrapper.find('#submit')).toHaveLength(1);
        })
    });
})