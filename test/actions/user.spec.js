import * as actions from '../../app/actions/user';

describe('actions__user', () => {
  describe('auth and unauth User', () => {
    it('should have auth user with uid action', () => {
      const auth = (uid) => ({ type: actions.AUTH_USER, uid });
      const authedId = 1234;
      expect(actions.authUser(authedId)).toEqual(auth(authedId));
    });
    it('should have unauth user action', () => {
      const unauthed = ({ type: actions.UNAUTH_USER });
      expect(actions.unauthUser()).toEqual(unauthed);
    });
  });
  describe('fetch user related action', () => {
    it('should have fetch user', () => {
      const userFetch = ({ type: actions.FETCHING_USER });
      expect(actions.fetchingUser()).toEqual(userFetch);
    });
    it('should have fetch user success', () => {
      const fetchUserSuccess = (uid, user) => ({
        type: actions.FETCHING_USER_SUCCESS,
        uid,
        user,
        timestamp: Date.now()
      });
      const userId = 1234;
      const usr = 'Martin the Warrior';

      expect(actions.fetchingUserSuccess(userId, usr)).toEqual(fetchUserSuccess(userId, usr));
    });
    it('should have fetch user failure', () => {
      const failure = ({
        type: actions.FETCHING_USER_FAILURE,
        error: 'Error fetching user',
      });
      expect(actions.fetchingUserFailure()).toEqual(failure);
    });
    it('should have a remove user fetch action', () => {
      const removeFetch = { type: actions.REMOVE_FETCHING_USER };
      expect(actions.removeFetchingUser()).toEqual(removeFetch);
    });
  });
});
