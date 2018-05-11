// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu/immutable';
import { slide as Menu } from 'react-burger-menu';
import { action as toggleMenu } from 'redux-burger-menu/immutable';
import { formatCurrentPath } from '../../utils/formats';
import * as styles from './styles.css';
import routes from './navigationRoutes';

type Props = {};

const BuildNavRoutes = ({ navRoutes, closeMenu }) => {
  return navRoutes.map((obj) => (
    <div key={obj.name}>
      <Link to={obj.URL} onClick={closeMenu}>
        {obj.name}
      </Link>
    </div>
  ));
};

BuildNavRoutes.propTypes = {
  navRoutes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired
  })).isRequired,
  closeMenu: PropTypes.func.isRequired
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
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

        <BuildNavRoutes
          navRoutes={routes}
          closeMenu={() => this.props.toggleMenu(false)} />
      </BurgerMenu>
    );
  }
}

Navigation.propTypes = {
  selected: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

const mapStateToProps = ({ router }) => {
  const currentPath = router.location ?router.location.pathname : 'home';

  return {
    selected: formatCurrentPath(currentPath)
  }
}

const mapActionsToProps = (dispatch) =>
  bindActionCreators({
    toggleMenu
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Navigation);
