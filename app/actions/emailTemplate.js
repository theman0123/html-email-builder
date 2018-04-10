// @flow

const FROM = 'FROM'; // Do you need this?
export const SUBJECT = 'SUBJECT';
const ADD_RECIPIENTS = 'ADD_RECIPIENTS';
export const CONFIRM_AND_LOCK = 'CONFIRM_AND_LOCK';
export const INVOICE_ID = 'INVOICE_ID';
export const AMOUNT = 'AMOUNT';
// BBC or CC? difference?

type inputTypeType = string;
type invoiceIdType = number;
type payloadType = string | number;
type recipientType = string;

export const updateTemplate = (
  inputType: inputTypeType,
  invoiceId: invoiceIdType,
  payload: payloadType
) =>
  ({
    inputType,
    invoiceId,
    payload,
  });

export const confirmAndLock = (invoiceId: invoiceIdType) => ({
  inputType: CONFIRM_AND_LOCK,
  invoiceId
});

export const addRecipients = (recipient: recipientType) => ({
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
