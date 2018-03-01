// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navContainer, homeLink, homeLinkContainer } from './styles.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={navContainer}>
        <div className={homeLinkContainer}>
          <Link className={homeLink} to='/'>{'Home'}</Link>
        </div>
      </div>
    );
  }
}
