import React from 'react';

describe('::GoogleAuth::', () => {
  it('props should have a link to google');
  describe('when it returns a success', () => {
    it('should drop payload of contacts in store')
  });
  describe('when it returns as a failure', () => {
    it('should show an error message');
    it('store.contacts should be empty');
  });
  describe('return users', () => {
    it('should give an option to automatically login on return visits');
    describe('if user opts to automatically login', () => {
      it('log user in');
    });
    describe('if user has not opted to automatically login', () => {
      it('should not log user in, and display GoogleAuth button');
    });
  });
});