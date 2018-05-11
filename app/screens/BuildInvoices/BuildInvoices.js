// @flow
import React, { Component } from 'react';
import { GoogleAuth } from 'components';

type Props = {};

export default class BuildInvoices extends Component<Props> {
  props: Props;

  render() {
    return (
      <GoogleAuth />
    );
  }
}
