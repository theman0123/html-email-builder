import { Map, List, fromJS } from 'immutable';
import emailTemplate from '../../app/reducers/emailTemplate';
import * as actions from '../../app/actions/emailTemplate';

// **Note: List from immutable registering undefined when testing for initial state and default

describe('emailTemplate reducer:', () => {
  it('should have an initialState', () => {
    expect(emailTemplate(undefined, {}).toJSON()).toEqual(fromJS({
      from: '',
      recipients: [undefined], // see Note**
      subject: '',
      invoices: {},
    }).toJSON());
  });
  it('handles inputType: INVOICE_ID', () => {
    const fakeAction = actions.updateTemplate(actions.INVOICE_ID, 1, 123456);
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.getIn(['invoices', 1]).toJSON()).toEqual(fromJS({
      invoiceId: 123456
    }).toJSON());
  });
  it('handles inputType: SUBJECT', () => {
    const fakeAction = actions.updateTemplate(actions.SUBJECT, 1, 'Bill: Urgent');
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.get('subject')).toEqual('Bill: Urgent');
  });
  it('handles inputeType: ADD_RECIPIENTS', () => {
    const fakeAction = actions.updateTemplate(actions.ADD_RECIPIENTS, 1, 'email@email.com');
    const updateInvoice = emailTemplate(undefined, fakeAction);
    expect(updateInvoice.get('recipients').toJSON()).toEqual(List(['email@email.com']).toJSON());
  });

  it('handles inputType: AMOUNT', () => {
    const fakeAction = actions.updateTemplate(actions.AMOUNT, 1, 45.76);
    const updateInvoice = emailTemplate(undefined, fakeAction);

    expect(updateInvoice.getIn(['invoices', 1, 'amount'])).toEqual(45.76);
  });
  it('handles inputeType: CONFIRM_AND_LOCK', () => {
    const fakeAction = actions.confirmAndLock(1);
    const updateTemplate = emailTemplate(undefined, fakeAction);

    expect(updateTemplate.getIn(['invoices', 1, 'confirmAndLock'])).toEqual(true);
  });
  it('has a default that returns the state', () => {
    const fakeState = fromJS({
      from: 'john@email.com',
      recipients: ['sam@email.com'],
      subject: 'URGENT',
      invoices: {},
    });

    expect(emailTemplate(fakeState, 'unhandleable')).toEqual(fromJS({
      from: 'john@email.com',
      recipients: ['sam@email.com', undefined], // see Note**
      subject: 'URGENT',
      invoices: {},
    }));
  });
});
