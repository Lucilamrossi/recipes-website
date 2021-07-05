import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FirstPage from './FirstPage';

configure({adapter: new Adapter()});

describe('First Page', () => {

    describe('<FirstPage />', () => {
        let wrapper;

        beforeEach(() => {
            wrapper =  shallow(<FirstPage />);
        });
        
        it('Should contain a "Start!" button', () => {
            expect(wrapper.find('.firstPage_btn')).toHaveLength(1);
            expect(wrapper.find(Link)).toHaveLength(1);
        })

        it('The button should have a text "Start!" and change to route "/app/home"', () => {
            expect(wrapper.find(Link).at(0).prop('to')).toEqual('/app/home');
            expect(wrapper.find(Link).at(0).text()).toEqual('Start!');
        });
    });
});