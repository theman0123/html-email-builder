// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {reducer as burgerMenu} from 'redux-burger-menu/immutable';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
  user,
  burgerMenu,
  counter,
  router,
});

export default rootReducer;
