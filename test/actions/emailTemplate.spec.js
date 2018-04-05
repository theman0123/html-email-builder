import { Map } from 'immutable';
import * as actions from '../../app/actions/emailTemplate';

describe('emailTemplate actions', () => {
  it('should have an updateTemplate, with an inputType(which input value to change), an id refering to an invoice \'row\', and a payload or value for the specified location', () => {
    expect(actions.updateTemplate('SUBJECT', 1, 'Bill: Urgent')).toEqual({
      inputType: 'SUBJECT',
      invoiceId: 1,
      payload: 'Bill: Urgent',
    });
  });
  it('should have a confirmInvoice()', () => {
    expect(actions.confirmAndLock()).toEqual({
      inputType: 'CONFIRM_AND_LOCK'
    });
  });
  it('should have an addRecipients() that contains an email address', () => {
    expect(actions.addRecipients('email@email.com')).toEqual({
      inputType: 'ADD_RECIPIENTS',
      recipient: 'email@email.com',
    });
  });
});
