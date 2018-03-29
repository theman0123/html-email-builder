// @flow
import { Map } from 'immutable';
import { FETCHING_CONTACTS, FETCHING_CONTACTS_FAILURE, FETCHING_CONTACTS_SUCCESS, REMOVE_FETCHING_CONTACTS } from '../../app/actions/contacts';
import type { actionType } from '../utils/constants';

type contactStateType = {
  +isFetching: boolean,
  +error: string
};

export const initialState = Map({
  isFetching: false,
  error: '',
});

export default function contacts(state: contactStateType = initialState, action: actionType) {
  switch (action.type) {
    case FETCHING_CONTACTS:
      return state.merge({
        isFetching: true,
      });
    case FETCHING_CONTACTS_FAILURE:
      return state.merge({
        error: action.error,
        isFetching: false,
      });
    case FETCHING_CONTACTS_SUCCESS:
      return state.merge(Map({ isFetching: false }))
        .merge(action.importedContacts);
    case REMOVE_FETCHING_CONTACTS:
      return state.merge({
        isFetching: false,
        error: '',
      });
    default:
      return state;
  }
}
