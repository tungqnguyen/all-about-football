import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const {isAuthenticated} = useAuth();
  console.log('hi', rest);
  return (
    <Route
      {...rest}
      render={routeProps =>
        rest.isAuthenticated ? (
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

const mapDispatchToProps = dispatch => {
  return {
    // onGetMatches: dispatch(actionCreators.getMatch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)