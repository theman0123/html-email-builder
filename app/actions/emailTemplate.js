import { Map } from 'immutable';

const FROM = 'FROM';//Do you need this?
export const SUBJECT = 'SUBJECT';
const ADD_RECIPIENTS = 'ADD_RECIPIENTS';
const CONFIRM_AND_LOCK = 'CONFIRM_AND_LOCK';
export const INVOICE_ID = 'INVOICE_ID';
// BBC or CC? difference?

export const updateTemplate = (inputType, invoiceId, payload) => ({
  inputType,
  invoiceId,
  payload,
});

export const confirmAndLock = () => ({
  inputType: CONFIRM_AND_LOCK
});

export const addRecipients = (recipient) => ({
  inputType: ADD_RECIPIENTS,
  recipient,
});

// subject(inputType): 'Bill: Urgent',
// to: ['email@email.com'],
// from: ['from@email.com'],
// invoices: {
//   12345(invoiceId/invoiceId):{
//     amount(inputType): 150.00,
//     id(invoiceId/invoiceId): 12345,
//     confirmed(confirmAndLock()): true,
//  }
// }
// total = invoices.reduce((prev, next) => return prev += [next]amount)
