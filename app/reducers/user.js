// @flow
import type { actionType } from '../utils/constants';
import { AUTH_USER, UNAUTH_USER, FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS, REMOVE_FETCHING_USER } from '../actions/user';

type userStateType = {
  +isFetching: boolean,
  +error: string,
  +isAuthed: boolean,
  +authedId: string
};

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
};

function manageUser(state = initialUserState, action: actionType) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        lastUpdate: Date.now(),
        info: action.user,
      };
    default:
      return state;
  }
}

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
};

export default function user(state: userStateType = initialState, action: actionType) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          error: '',
          isFetching: false,
        }
        : {
          ...state,
          error: '',
          isFetching: false,
          [action.uid]: manageUser(state[action.uid], action),
        };
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
