import { fromJS } from 'immutable';
import contacts from '../../app/reducers/contacts';
import * as actions from '../../app/actions/contacts';

describe('contacts reducer:', () => {
  describe('has an initial state', () => {
    it('initial state is setup correctly', () => {
      expect(contacts(undefined, {}).toJSON()).toEqual(fromJS({
        isFetching: false,
        error: '',
      }).toJSON());
    });
  });
  describe('can handle fetches', () => {
    it('initiates fetch', () => {
      expect(contacts(undefined, actions.fetchingContacts()).toJSON()).toEqual(fromJS({
        isFetching: true,
        error: '',
      }).toJSON());
    });
    it('handles a success', () => {
      const fakeContacts = fromJS({
        1234: {
          id: 1234,
          name: 'cornflower',
        }
      });
    expect(contacts(undefined, actions.fetchingContactsSuccess(fakeContacts)).toJSON())
        .toEqual(fromJS({
          isFetching: false,
          error: '',
        }).merge(fakeContacts).toJSON());
    });
    it('handles a failure', () => {
      const err = 'Error Fetching Contacts';
      expect(contacts(undefined, actions.fetchingContactsFailure(err)).toJSON()).toEqual(fromJS({
        isFetching: false,
        error: err,
      }).toJSON());
    });
    it('can remove a fetch', () => {
      expect(contacts(fromJS({ isFetching: true, error: '' }), actions.removeFetchingContacts())).toEqual(fromJS({
        isFetching: false,
        error: '',
      }));
    });
  });
});
