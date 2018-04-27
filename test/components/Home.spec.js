import React from 'react';
import shallow from 'enzyme';
import { Home } from '../../app/components';

describe('renders welcome/home text', () => {
  it('renders welcome/home text', () => {
//    let wrapper = shallow(<Home text='Hi'/>);
   console.log(shallow(<div>'hi'</div>))
    expect(wrapper.prop('text')).toEqual('Hi');
     })
})