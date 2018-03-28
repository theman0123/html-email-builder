import * as actions from '../../app/actions/contacts' 

describe('contact actions:', () => {
  it('initiates fetching contacts', () => {
    expect(actions.fetchingContacts()).toEqual({
      type: actions.FETCHING_CONTACTS,
    })
  })
  it('handles a success', () => {
    const contacts = {
      id: 1234,
      name: 'Matthias',
     }
    const success = (importedContacts) => ({
      type: actions.FETCHING_CONTACTS_SUCCESS,
      importedContacts,
    })
    expect(actions.fetchingContactsSuccess(contacts)).toEqual(success(contacts))
  })
  it('handles a failure', () => {
    const err = ''
    const failure = (error) => ({
      type: actions.FETCHING_CONTACTS_FAILURE,
      error: 'Error Fetching Contacts',
    })
    expect(actions.fetchingContactsFailure(err)).toEqual(failure(err))
  })
  it('has a remove fetching', () => {
    expect(actions.removeFetchingContacts()).toEqual({type: actions.REMOVE_FETCHING_CONTACTS})
  })
})
  