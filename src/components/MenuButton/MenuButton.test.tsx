import React from 'react';
import { Link } from 'react-router-dom';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { MenuButton } from './MenuButton';

describe('Tests for menu button', () => {
    
    test('should create menu button with props', () => {
        const mockCallBack = jest.fn();
        const menuButton = mount(<IntlProvider locale="en">
            <MenuButton clicked={mockCallBack} textId="test" to="/"/>
            </IntlProvider>);
        const button = menuButton.find('button');
        expect(button.text()).toBe('Button');
        button.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});