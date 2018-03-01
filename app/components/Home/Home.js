// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className={styles.btn}>Login with Google</div>
          <Link to='/landing'>{'Landing'}</Link>
        </div>
      </div>
    );
  }
}
