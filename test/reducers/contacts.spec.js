import contacts from '../../app/reducers/contacts'
import * as actions from '../../app/actions/contacts'

describe('contacts reducer:', () => {
  describe('has an initial state', () => {
    it('initial state is setup correctly', () => {
      expect(contacts(undefined, {})).toEqual({
        isFetching: false,
        error: '',
      })
    })
  })
  describe('can handle fetches', () => {
    it('initiates fetch', () => {
       expect(contacts(undefined, actions.fetchingContacts())).toEqual({
         isFetching: true,
         error: '',
       })
    })
    it('handles a success', () => {
      const fakeContacts = {
        1234: {
          id: 1234,
          name: 'cornflower',
        }
      }
      
      expect(contacts(undefined, actions.fetchingContactsSuccess(fakeContacts))).toEqual({
        isFetching: false,
        error: '',
        ...fakeContacts,
      })
    })
    it('handles a failure', () => {
      const err = 'Error Fetching Contacts'
      expect(contacts(undefined, actions.fetchingContactsFailure(err))).toEqual({
        isFetching: false,
        error: err,
      })
    })
    it('can remove a fetch', () => {
      expect(contacts({isFetching: true, error: ''}, actions.removeFetchingContacts())).toEqual({
        isFetching: false,
        error: '',
      })
    })
  })
})