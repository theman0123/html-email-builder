// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import * as styles from './styles.css';

type Props = {};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSelected = this.onSelected.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }
  
  onSelected(e) {
    e.preventDefault();
    
    console.log('onSelected')
  }

  render() {
    const BurgerMenu = reduxBurgerMenu(Menu);
    const selected = this.props.selected;

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
          <div className={styles.selected}>
            {selected}
          </div>
        </div>
        <Link to="/">
          {'Home'}
        </Link>
        <Link to="/build-invoices">
          {'Build Invoices'}
        </Link>
        <a
          onClick={this.showSettings}
          className="menu-item--small"
          href="">
          {'Settings'}
        </a>
      </BurgerMenu>
    );
  }
}

const mapStateToProps = ({router}) => {
  const location = router.location.pathname
  const currentPath = location === '/' || location === null ? 'Home' : location;
//  const formatCurrentPath = //remove slashes and add spaces for dashes
  return {
    selected: currentPath
  }
}

export default connect(mapStateToProps)(Navigation);
