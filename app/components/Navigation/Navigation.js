// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import * as styles from './styles.css';

type Props = {};

class Navigation extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const BurgerMenu = reduxBurgerMenu(Menu);
    return (
      <BurgerMenu
        right
        burgerButtonClassName={styles.burgerButton}
        burgerBarClassName={styles.burgerBars}
        crossButtonClassName={styles.crossButton}
        crossClassName={styles.cross}
        menuClassName={styles.burgerMenu}
        itemListClassName={styles.itemList}>
        <div className={styles.menuHeader}>
          {'Select an App'}
        </div>
        <Link to="/build-invoices">
          {'Build Invoices'}
        </Link>
        <a
          onClick={ this.showSettings }
          className="menu-item--small"
          href="">
          {'Settings'}
        </a>
      </BurgerMenu>
    );
  }
}

export default Navigation;
