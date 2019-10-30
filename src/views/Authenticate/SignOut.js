import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

const SignOut = (props) => {
  console.log('render');
  return (
    <div> sign out success</div>
    )
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: ()=> dispatch(actionCreators.signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)