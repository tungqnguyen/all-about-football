import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log('hi', rest);
  return (
    <Route
      {...rest}
      render={routeProps =>
        //bypassing authentication
        // rest.isAuthenticated ? (
        true ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token,
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)