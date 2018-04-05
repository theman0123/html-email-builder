import { Map } from 'immutable';
import { ADD_RECIPIENTS, CONFIRM_AND_LOCK, INVOICE_ID, SUBJECT } from '../../app/actions/emailTemplate';

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

const initialState = Map({
  from: '',
  recipients: [],
  subject: '',
  invoices: Map({}),
});

export default function emailTemplate(state = initialState, action) {
  switch (action.inputType) {
    case INVOICE_ID:
      return state.setIn(['invoices', action.invoiceId, 'invoiceId'], action.payload);
    case SUBJECT:
      return state.merge({ subject: action.payload });
    case RECIPIENTS://drag and drop
      return state;//update(recipients, {$push: [action.payload]}),
//    case AMOUNT:
//      return {
//        ...state,
//        invoices[action.objectId].amount: action.payload),
//      }
//    case CONFIRM_AND_LOCK:
//      return {
//        ...state,
//        invoices[action.objectId].confirmed: action.payload),//bool
//      }
    default:
      return state;
  }
}
