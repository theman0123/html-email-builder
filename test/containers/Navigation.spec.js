import React from 'react';
import { configureStore, history } from '../../app/store/configureStore';
import { Navigation, BuildNavRoutes } from '../../app/components';
import { routes } from '../../app/components/Navigation/navigationRoutes';
import { action as toggleMenu } from 'redux-burger-menu/immutable';

describe('NAVIGATION', () => {
  let wrapper;
  let buildWrapper;
  let initialBM;
  let props;
  beforeEach(() => {
    const store = configureStore();
    wrapper = shallow(<Navigation store={store}/>);
//    buildWrapper = shallow(<BuildNavRoutes />);
    
    initialBM = store.getState().burgerMenu.get('isOpen');
    
//    props = {
//      routes: [{
//        name: 'example route',
//        URL: '/example-route'
//      }];
//    }
  });
  
  it('should be connected to store', () => {
    expect(initialBM).toMatchSnapshot();
  });
  
  it('should display landing route from props.selected', () => {
    expect(wrapper.prop('selected')).toEqual('home');
  });
  describe('BuildNavRoutes receives props for routes and renders children', () => {
    beforeEach(() => {
      
    });
    it('renders children', () => {
//      test that it renders children //
      console.log(wrapper.dive().find('BuildNavRoutes').children())
//      expect(wrapper.props())
    })
  })
});
