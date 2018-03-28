import { user } from '../../app/reducers/user';
import * as actions from '../../app/actions/user';

describe('user reducer', () => {
  describe('should auth user', () => {
    it('should set initial state', () => {
      expect(user(undefined, {})).toEqual({
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      });
    });
    it('should changed authed to true, and place user id on authedId', () => {
      const id = 1234;
      expect(user(undefined, actions.authUser(id))).toEqual({
        isFetching: true,
        error: '',
        isAuthed: true,
        authedId: id,
      });
    });
  });
  describe('on error', () => {
    it('should set error message if fetch failes', () => {
      const err = 'Error fetching user';
      expect(user(undefined, actions.fetchingUserFailure(err))).toEqual({
        isFetching: false,
        error: err,
        isAuthed: false,
        authedId: '',
      });
    });
  });
  describe('misc tests', () => {
    it('removeFetchingUser should remove user from state', () => {
      expect(user({
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      }, actions.removeFetchingUser())).toEqual({
        isFetching: false,
        error: '',
        isAuthed: false,
        authedId: '',
      });
    });
  });
});
