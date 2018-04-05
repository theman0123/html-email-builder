import { Map } from 'immutable';
import emailTemplate from '../../app/reducers/emailTemplate';
import * as actions from '../../app/actions/emailTemplate';

describe('emailTemplate reducer:', () => {
  it('should have an initialState', () => {
    expect(emailTemplate(undefined, {})).toEqual(Map({
      from: '',
      recipients: [],
      subject: '',
      invoices: Map({}),
    }));
  });
  it('handles inputType: INVOICE_ID', () => {
    const fakeAction = actions.updateTemplate(actions.INVOICE_ID, 1, 123456);
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.getIn(['invoices', 1])).toEqual(Map({
      invoiceId: 123456
    }));
  });
  it('handles inputType: SUBJECT', () => {
    const fakeAction = actions.updateTemplate(actions.SUBJECT, 1, 'Bill: Urgent');
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.get('subject')).toEqual('Bill: Urgent');
  });
  it('handles inputeType: RECIPIENTS', () => {
    const fakeAction = actions.updateTemplate(actions.RECIPIENTS, 1, ['email@email.com']);
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.get('recipients')).toEqual(['email@email.com']);
  });
  
  it('handles inputType: AMOUNT')
  it('handles inputeType: CONFIRM_AND_LOCK')
  it('has a default that returns the state', () => {
    const fakeState = Map({
      from: 'john@email.com',
      recipients: ['sam@email.com'],
      subject: 'URGENT',
      invoices: {},
    });
    expect(emailTemplate(fakeState, 'unhandleable')).toEqual(Map({
      from: 'john@email.com',
      recipients: ['sam@email.com'],
      subject: 'URGENT',
      invoices: {},
    }));
  });
});
