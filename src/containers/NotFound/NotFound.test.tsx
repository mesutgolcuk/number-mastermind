import React from 'react';

import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('Test not found component', () => {
    
    test('should "not found" url equal to url path', () => {
        const actual = 'http://localhost/';
        const notFound = shallow(<NotFound/>);
        const url = notFound.find('.not-found-url');
        expect(url.text()).toBe(actual)
    });
});