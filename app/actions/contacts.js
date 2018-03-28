// @flow
import { actionType } from '../utils/constants'

export const FETCHING_CONTACTS = 'FETCHING_CONTACTS'
export const FETCHING_CONTACTS_FAILURE = 'FETCHING_CONTACTS_FAILURE'
export const FETCHING_CONTACTS_SUCCESS = 'FETCHING_CONTACTS_SUCCESS'
export const REMOVE_FETCHING_CONTACTS = 'REMOVE_FETCHING_CONTACTS'

export const fetchingContacts = () => ({type: FETCHING_CONTACTS})
  
export const fetchingContactsFailure = (error: string): actionType => {
  console.warn(error)
  return {
    type: FETCHING_CONTACTS_FAILURE,
    error: 'Error Fetching Contacts',
  }
  }
  
export const fetchingContactsSuccess = (importedContacts: mixed): actionType =>
({
  type: FETCHING_CONTACTS_SUCCESS,
  importedContacts,
})

export const removeFetchingContacts = () => ({type: REMOVE_FETCHING_CONTACTS})
