// @flow
import { fromJS } from 'immutable';
import type { IndexedCollection, KeyedCollection, IndexedSeq } from 'immutable';
import { AUTH_USER, UNAUTH_USER, FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS, REMOVE_FETCHING_USER } from '../actions/user';
import type { userType } from '../actions/user';

type actionType = {
  +type: string,
  +error?: string,
  +uid?: string,
  +user?: userType,
  +timestamp?: string
};

type userStateType = {
  +isFetching: boolean | void,
  +error?: string,
  +isAuthed: boolean | void,
  +authedId: string | void
};

type manageUserType = {
  +lastUpdated?: string,
  info: {
    +name: string,
    +uid: number,
    +avatar: string
  }
};

const initialUserState = fromJS({
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
});

function manageUser(state: manageUserType = initialUserState, action: actionType): stateType {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return state.set('lastUpdated', Date.now()).set('info', action.user);
    default:
      return state;
  }
}

const initialState: userStateType = fromJS({
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
        : state
          .set('error', '')
          .set('isFetching', false)
          .set(action.uid, manageUser(state[action.uid], action));
    case REMOVE_FETCHING_USER:
      return state.merge({
        isFetching: false,
        error: '',
      });
    default:
      return state;
  }
}
