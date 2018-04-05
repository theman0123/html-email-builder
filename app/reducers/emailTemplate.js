
const initialState = {
  from: '',
  recipients: [],
  subject: '',
  invoices: {},
}

export default function defaultTemplate (state = initialState, action) {
  switch(action.inputType) {
    case INVOICE_ID :
      return {
        ...state,
        invoices[action.objectId]: {invoiceId: action.payload},//I will generate objectId when user adds invoice
      }
    case SUBJECT :
      return {
        ...state,
        subject: action.payload,//autofill but available to change... i.e. 'invoice: urgent' or 'new invoice for ..'
      }
    case RECIPIENTS ://drag and drop
      return update(recipients, {$push: [action.payload]}),
    case AMOUNT :
      return {
        ...state,
        invoices[action.objectId].amount: action.payload),
      }
    case CONFIRM_AND_LOCK :
      return {
        ...state,
        invoices[action.objectId].confirmed: action.payload),//bool
      }
    default :
      return state
  }
}

