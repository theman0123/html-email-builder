import React from 'react';
import shallow from 'enzyme';
import { Home } from '../../app/components';

describe('renders welcome/home text', () => {
  it('renders welcome/home text', () => {
    let wrapper = shallow(<Home text='Hi'/>);
    expect(wrapper).toMatchSnapshot();
     })
})