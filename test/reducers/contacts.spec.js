import { Map } from 'immutable';
import contacts from '../../app/reducers/contacts';
import * as actions from '../../app/actions/contacts';

describe('contacts reducer:', () => {
  describe('has an initial state', () => {
    it('initial state is setup correctly', () => {
      expect(contacts(undefined, {})).toEqual(Map({
        isFetching: false,
        error: '',
      }));
    });
  });
  describe('can handle fetches', () => {
    it('initiates fetch', () => {
      expect(contacts(undefined, actions.fetchingContacts())).toEqual(Map({
        isFetching: true,
        error: '',
      }));
    });
    it('handles a success', () => {
      const fakeContacts = Map({
        1234: {
          id: 1234,
          name: 'cornflower',
        }
      });
    expect(contacts(undefined, actions.fetchingContactsSuccess(fakeContacts)))
        .toEqual(Map({
          isFetching: false,
          error: '',
        }).merge(fakeContacts));
    });
    it('handles a failure', () => {
      const err = 'Error Fetching Contacts';
      expect(contacts(undefined, actions.fetchingContactsFailure(err))).toEqual(Map({
        isFetching: false,
        error: err,
      }));
    });
    it('can remove a fetch', () => {
      expect(contacts(Map({ isFetching: true, error: '' }), actions.removeFetchingContacts())).toEqual(Map({
        isFetching: false,
        error: '',
      }));
    });
  });
});
