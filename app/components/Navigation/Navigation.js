// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.css';
import { slide as Menu } from 'react-burger-menu'

type Props = {};

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu className={styles.mainMenu} itemListClassName={styles.itemList} right noOverlay >
        <div className={styles.header}>{'Select an App'}</div>
        <Link to="/build-invoices">Build Invoices</Link>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}