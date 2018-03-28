// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import IconGoogle from '../../assets/icon-google.js'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.mdText}>
          {'Hi.'}
        </div>
      </div>
    );
  }
}
