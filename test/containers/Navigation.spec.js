import React from 'react';
import { configureStore, history } from '../../app/store/configureStore';
import { Navigation, BuildNavRoutes } from '../../app/components';
import { routes } from '../../app/components/Navigation/navigationRoutes';
import { action as toggleMenu } from 'redux-burger-menu/immutable';

describe('::NAVIGATION::', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = configureStore();
    wrapper = shallow(<Navigation store={store}/>);
  });
  
  describe('it should be connected to store', () => {
    it('should be closed initially', () => {
      const initialBM = store.getState().burgerMenu.get('isOpen');
      expect(initialBM).toMatchSnapshot();
    });
  });
  
  it('should display landing route from props.selected', () => {
    expect(wrapper.prop('selected')).toEqual('home');
  });
  describe('BuildNavRoutes', () => {
    it('renders children', () => {
      expect(wrapper.dive().children().last().props())
        .toMatchSnapshot();
    });
  });
});
