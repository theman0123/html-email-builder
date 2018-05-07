// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import { formatCurrentPath } from '../../utils/formats';
import * as styles from './styles.css';

type Props = {};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleClick() {
    return this.props.toggleMenu(false);
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

        <Link to="/" onClick={this.handleClick}>
          {'Home'}
        </Link>

        <Link to="/build-invoices" onClick={this.handleClick}>
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

const mapStateToProps = ({ router }) => {
  const currentPath = router.location ?router.location.pathname : 'Home';

  return {
    selected: formatCurrentPath(currentPath)
  }
}

const mapActionsToProps = (dispatch) =>
  bindActionCreators({
    toggleMenu
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Navigation);
