import React from 'react';
import { WelcomeText } from '../../app/components';

describe('renders welcome/home text', () => {
  it('renders welcome/home text', () => {
    const wrapper = shallow(<WelcomeText />);
    expect(wrapper.instance().props.text).toBe('Hi');
  });
});
