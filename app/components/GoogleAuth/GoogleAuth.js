import React from 'react';
import PropTypes from 'prop-types';
import contactsApi from '../../utils/OAuth.js';

export default class GoogleAuth extends React.Component {
  render() {
    console.log(contactsApi())
    return (
      <div> Sign in With Google to continue </div>
    )
  }
};

GoogleAuth.propTypes = {
  
};
