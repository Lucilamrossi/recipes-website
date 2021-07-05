import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavBar from './NavBar';

configure({adapter: new Adapter()});

describe('NavBar', () => {

    describe('<NavBar />', () => {
        let wrapper;

        beforeEach(() => {
            wrapper =  shallow(<NavBar />);
        });
        
        it('Should contain 2 NavLinks with className=link', () => {
            expect(wrapper.find('.link')).toHaveLength(2);
            expect(wrapper.find(NavLink)).toHaveLength(2);
        });

        it('The first one should change to "/app/home" and have text "Home"', () => {
            expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/app/home');
            expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
        });

        it('The second one should change to "/app/createRecipe" and have text "New Recipe!"', () => {
            expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/app/createRecipe');
            expect(wrapper.find(NavLink).at(1).text()).toEqual('New Recipe!');
        });
    });
});