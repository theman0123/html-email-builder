import { Map } from 'immutable';
import * as actions from '../../app/actions/emailTemplate';

describe('emailTemplate actions', () => {
  it('should have an updateTemplate, with an inputType(which input value to change), an id refering to an invoice \'row\', and a payload or value for the specified location', () => {
    expect(actions.updateTemplate('SUBJECT', 1, 'Bill: Urgent')).toEqual(Map({
      inputType: 'SUBJECT',
      objectId: 1,
      payload: 'Bill: Urgent',
    }));
  });
  it('should have a confirmInvoice()', () => {
    expect(actions.confirmAndLock()).toEqual(Map({
      inputType: 'CONFIRM_AND_LOCK'
    }));
  });
  it('should have an addRecipients() that contains an email address', () => {
    expect(actions.addRecipients('email@email.com')).toEqual(Map({
      inputType: 'ADD_RECIPIENTS',
      recipient: 'email@email.com',
    }));
  });
});
