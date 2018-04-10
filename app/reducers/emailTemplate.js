import { fromJS } from 'immutable';
import { AMOUNT, ADD_RECIPIENTS, CONFIRM_AND_LOCK, INVOICE_ID, SUBJECT } from '../../app/actions/emailTemplate';

// const initialInvoice = {
//  amount: 0,
//  invoiceId: null,
//  confirmed: false,
// }

// 12345(objectId/invoiceId):{
//     amount(inputType): 150.00,
//     id(objectId/invoiceId): 12345,
//     confirmed(confirmAndLock()): true,
//  }
// const manageInvoice = (state = initialInvoice, action) => {
//  switch(inputType) {
//    case INVOICE_ID:
//      return state.merge({
//        invoiceId: action.invoiceId
//      })
//    default:
//      return state;
//  };
// };

const initialState = fromJS({
  from: '',
  recipients: [],
  subject: '',
  invoices: {},
});
// Do you want to add in a second reducer??
export default function emailTemplate(state = initialState, action) {
  switch (action.inputType) {
    case SUBJECT:
      return state.merge({ subject: action.payload });
    case ADD_RECIPIENTS:
      return state.merge({
        recipients: state.get('recipients').push(action.payload)
      });
    case INVOICE_ID:
      return state.setIn(['invoices', action.invoiceId, 'invoiceId'], action.payload);
    case AMOUNT:
      return state.setIn(['invoices', action.invoiceId, 'amount'], action.payload);
    case CONFIRM_AND_LOCK:
      return state.setIn(['invoices', action.invoiceId, 'confirmAndLock'], true);
    default:
      return state;
  }
}
