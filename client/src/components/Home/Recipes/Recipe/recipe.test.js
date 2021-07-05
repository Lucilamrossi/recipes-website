import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Recipe from './Recipe';


configure({adapter: new Adapter()});

describe('Recipe', () => {

    describe('<Recipe />', () => {
        let wrapper;
        let recipe = {
            id: "8770a4af-5d58-4051-b8cc-46493a99142b",
            name: "pizza",
            summary: "pizza",
            rating: 40,
            health_rating: 50,
            steps: [
                "fideos",
                "agua",
                "salsa"
            ],
            types: [
                "vegan",
                "vegetarian",
                "pepe",
                "pizza"
            ],
            img: "http://cla.com"
        };

        beforeEach(() => {
            wrapper =  shallow(<Recipe recipe={recipe} />);
        })
        
        it('should recive a recipe and show the correct properties', () => {
            expect(wrapper.contains(recipe.name)).toEqual(true);
            expect(wrapper.contains(recipe.rating)).toEqual(true);
            expect(wrapper.contains(recipe.health_rating)).toEqual(true);
        })

        it('should have a buttom that change to "/app/createRecipe" and have text "View more!"', () => {
            expect(wrapper.find(Link).at(0).prop('to')).toEqual('/app/recipe/' + recipe.id);
            expect(wrapper.find(Link).at(0).text()).toEqual('View more!');
        });

        it('should have .types elements that match the amount of types of recipe', () => {
            expect(wrapper.find('.types')).toHaveLength(4);
        });
        
    });
});