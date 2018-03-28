// @flow
import * as React from 'react';
import { Navigation } from 'components'

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Navigation />

        <div>{this.props.children}</div>
      </div>
    );
  }
}
