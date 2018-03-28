// @flow

import { FETCHING_CONTACTS, FETCHING_CONTACTS_FAILURE, FETCHING_CONTACTS_SUCCESS, REMOVE_FETCHING_CONTACTS } from '../../app/actions/contacts';


type actionType = {
  +type: string,
  +error: string,
  +importedContacts?: mixed
};

type contactStateType = {
  +isFetching: boolean,
  +error: string
};

export const initialState = {
  isFetching: false,
  error: '',
};

export default function contacts(state: contactStateType = initialState, action: actionType) {
  switch (action.type) {
    case FETCHING_CONTACTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_CONTACTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case FETCHING_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.importedContacts
      };
    case REMOVE_FETCHING_CONTACTS:
      return {
        ...state,
        isFetching: false,
        error: '',
      };
    default:
      return state;
  }
}
