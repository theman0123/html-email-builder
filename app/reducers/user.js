// @flow
import type { actionType } from '../utils/constants';
import { AUTH_USER, UNAUTH_USER, FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS, REMOVE_FETCHING_USER } from '../actions/user';
import { Map } from 'immutable';

type userStateType = {
  +isFetching: boolean,
  +error: string,
  +isAuthed: boolean,
  +authedId: string
};

type manageUserType = {
  +lastUpdated?: string,
  info: {
    +name: string,
    +uid: number,
    +avatar: string
  }
};

const initialUserState = Map({
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
});

function manageUser(state: manageUserType = initialUserState, action: actionType) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return state.merge({
        lastUpdate: Date.now(),
        info: action.user,
      });
    default:
      return state;
  }
}

const initialState = Map({
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
});

export default function user(state: userStateType = initialState, action: actionType) {
  switch (action.type) {
    case AUTH_USER:
      return state.merge({
        isAuthed: true,
        authedId: action.uid,
      });
    case UNAUTH_USER:
      return state.merge({
        isAuthed: false,
        authedId: '',
      });
    case FETCHING_USER:
      return state.merge({
        isFetching: true,
      });
    case FETCHING_USER_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? state.merge({
          error: 'uh oh. no user found',
          isFetching: false,
        })
        : state.merge({
          error: '',
          isFetching: false,
          [action.uid]: manageUser(state[action.uid], action),
        });
    case REMOVE_FETCHING_USER:
      return state.merge({
        isFetching: false,
        error: '',
      });
    default:
      return state;
  }
}
