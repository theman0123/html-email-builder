import user from '../../app/reducers/user';
import * as actions from '../../app/actions/user';
import { Map } from 'immutable';

describe('user reducer', () => {
  describe('should auth user', () => {
    it('should set initial state', () => {
      expect(user(undefined, {})).toEqual(Map({
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      }));
    });
    it('should changed authed to true, and place user id on authedId', () => {
      const id = 1234;
      expect(user(undefined, actions.authUser(id))).toEqual(Map({
        isFetching: true,
        error: '',
        isAuthed: true,
        authedId: id,
      }));
    });
  });
  describe('on error', () => {
    it('should set error message if fetch failes', () => {
      const err = 'Error fetching user';
      expect(user(undefined, actions.fetchingUserFailure(err))).toEqual(Map({
        isFetching: false,
        error: err,
        isAuthed: false,
        authedId: '',
      }));
    });
  });
  describe('misc tests', () => {
    it('removeFetchingUser should remove user from state', () => {
      const initialState = Map({
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      });
      expect(user(initialState, actions.removeFetchingUser())).toEqual(initialState.merge({
        isFetching: false,
        error: '',
      }));
    });
  });
});
