// @flow
import React, { Component } from 'react';
import { WelcomeText } from 'components';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <WelcomeText />
    );
  }
}
