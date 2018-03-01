// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

type Props = {};

export default class Landing extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        {'landing page'}
      </div>
    );
  }
}
