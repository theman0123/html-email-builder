import React from 'react';
import renderer from 'react-test-renderer'
import { Navigation } from '../../app/components';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { configureStore, history } from '../../app/store/configureStore';


describe('NAVIGATION COMPONENT', () => {
  describe('Navigation icon should be visible', () => {
//    const store = configureStore();
    
//    it('Match previous visible styling', () => {
//      const wrapper = shallow(<Navigation />);
//     figure out a way to test if component is visible -> look at testing css console.log(wrapper.find('.burgerButtonMenu'), styles.burgerButtonClassName)
//      expect(wrapper.props()).toMatchSnapshot();
//    });
  });
  describe(':::store.burgerMenu represents bugerMenu component:::', () => {
    const store = configureStore();
    const wrapper = shallow(<Navigation store={store}/>);
    const initialBM = store.getState().burgerMenu.get('isOpen');
//    const initialLocation = store.getState().router.location;
    
    it('should be connected to store', () => {
      expect(initialBM).toMatchSnapshot();
    });
    it('should display current route from props.selected', () => {
      expect(wrapper.prop('selected')).toEqual('Home');
    });
    it('should have handleClick', () => {
      const handleClick = wrapper.dive().instance().handleClick;
      const handleExists = handleClick !== "undefined";
      expect(handleExists).toBe(true);
    });
    it('should close nav menu with onClick/handleClick', () => {
      const closed = initialBM === false;
      store.dispatch(toggleMenu(true));
      
      const open = store.getState().burgerMenu.get('isOpen');
      wrapper.dive().find('Link').first().simulate('click');
      const afterSelect = 'nothing';
      console.log(closed, open, afterSelect, wrapper.dive().find('Link').first().simulate('click'));
//      const openSelectLinkClose =  closed && open && afterSelect; 
      //check store.menuOpen should be true
      //click
      //check store.menuOpen -> should be false
      expect(wrapper.dive().find('Link').first().simulate('click'));
    });
  });
});
