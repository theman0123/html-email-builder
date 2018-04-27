import React from 'react';
import { shallow } from 'enzyme';

describe('Navigation container', () => {
  it('should received object from redux that lists possible routes/menu items');
  it('menu items are linked to appropriate routes');
  it('when click targets non navigation container, navigation should minimize');
  it('navigation should open on click of icon');
});

// small exmaple below//
//describe('something', () => {
//  let wrapper;
//  describe('something', () => {
//    beforeEach(() => {
//      wrapper = shallow(<Component/>);
//
//      it('something', () => {
//        expect(wrapper.find('onClick')).toHaveLength(1);
//      });
//    });
//  });
//});
