// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import {action as toggleMenu} from 'redux-burger-menu/immutable';
import * as styles from './styles.css';

type Props = {};

class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const NewMenu = reduxBurgerMenu(Menu);
    return (
      <div className={styles.button}>
        <NewMenu right className={styles.mainMenu} itemListClassName={styles.itemList} >
          <div className={styles.header}>{'Select an App'}</div>
          <Link to="/build-invoices">Build Invoices</Link>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </NewMenu>
      </div>
    );
  }
}

export default Navigation;