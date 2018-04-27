// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import IconGoogle from '../../assets/icon-google.js'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.mdText}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  text: PropTypes.string.isRequired
}

Home.defaultProps = {
  text: 'Hi'
}
