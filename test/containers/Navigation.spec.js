import React from 'react';
import renderer from 'react-test-renderer'
import { Navigation } from '../../app/components';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { configureStore, history } from '../../app/store/configureStore';


describe('Navigation container', () => {
  describe('Navigation icon should be visible', () => {
//    const store = configureStore();
    
    it('Match previous visible styling', () => {
      const wrapper = shallow(<Navigation />);
//     figure out a way to test if component is visible -> look at testing css console.log(wrapper.find('.burgerButtonMenu'), styles.burgerButtonClassName)
        expect(wrapper.props()).toMatchSnapshot();
    });
  });
  describe('store.burgerMenu represents bugerMenu component', () => {
    it('should toggle menu open', () => {
      const store = configureStore();
      const closed = store.getState().burgerMenu.get('isOpen');

      store.dispatch(toggleMenu(true));

      const open = store.getState().burgerMenu.get('isOpen');
      const closedThenOpen = closed === false && open === true;

      expect(closedThenOpen).toEqual(true);
    });
    it('menu items are linked to appropriate routes');
  });
});
// should render menu, click on 'html-invoices' and see redux store change to that location //
