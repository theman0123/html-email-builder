import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'components';
// for flow
// type Props = {
//   children: React.Node
// };

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div>{this.props.children}</div>
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.node.isRequired,
};
