//create a home page and navigation menu in app
//create login/auth
//create html-email-template link and page
//bring in contacts
//wrap contacts in dragable components
//drop and drop contacts to get their info
//connect python,
//send emails with loaded data and python

//reducers: [
//authedUser:{info, id},
//contacts:{listOfObjContacts}, 
//htmlTemplate: {inputsForTemplate},
//]





//html-email-template__reducer
import update from 'immutability-helper'
const FROM = 'FROM'
const RECIPIENTS = 'RECIPIENTS'
const SUBJECT = 'SUBJECT'
const INVOICE_ID = 'INVOICE_ID'
const AMOUNT = 'AMOUNT'
const CONFIRM_AND_LOCK = 'CONFIRM_AND_LOCK'

//BBC or CC? difference?

export const updateTemplate = (inputType, objectId, payload) => {
  return {
    inputType,
    objectId,
    payload,
  }
}


//invoices: {
//  12345:{
//    amount: 150.00,
//    id: 12345,
//    confirmed: true,
//  }    
//}
//total = invoices.reduce((prev, next) => return prev += [next]amount)


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

