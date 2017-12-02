import React from 'react';
import {shallow} from 'enzyme';
import BottomNavigation from '../BottomNavigation.react';

describe('BottomNavigation', () => {

    it('renders', () => {
        const component = shallow(<BottomNavigation label="Test label"/>);
        expect(component).to.be.ok;
    });
});
