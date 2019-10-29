import React from 'react';

import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Menu from './Menu';

describe('Tests for menu component', () => {
    
    test('should create menu buttons', () => {
        const actual = 3;
        const menuComponent = mount(<IntlProvider locale="en"><Menu/></IntlProvider>);
        const buttons = menuComponent.find('MenuButton');
        expect(buttons.length).toBe(actual);
    });
});