import { Map } from 'immutable';

const FROM = 'FROM';//Do you need this?
const ADD_RECIPIENTS = 'ADD_RECIPIENTS';
const CONFIRM_AND_LOCK = 'CONFIRM_AND_LOCK';
// BBC or CC? difference?

export const updateTemplate = (inputType, objectId, payload) => Map({
  inputType,
  objectId,
  payload,
});

export const confirmAndLock = () => Map({
  inputType: CONFIRM_AND_LOCK
});

export const addRecipients = (recipient) => Map({
  inputType: ADD_RECIPIENTS,
  recipient,
});

// invoices: {
//  12345:{
//    amount(inputType): 150.00,
//    subject: 'Bill: Urgent',
//    id(objectId): 12345,
//    confirmed(confirmAndLock()): true,
//  }
// }
// total = invoices.reduce((prev, next) => return prev += [next]amount)
