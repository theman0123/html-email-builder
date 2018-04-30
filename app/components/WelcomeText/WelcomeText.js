// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import IconGoogle from '../../assets/icon-google.js'

type Props = {};

export default class WelcomeText extends Component<Props> {
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

WelcomeText.propTypes = {
  text: PropTypes.string
};

WelcomeText.defaultProps = {
  text: 'Hi'
};
