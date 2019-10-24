import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

const SignOut = (props) => {
  props.signOut();
  return (
    <div> Log out successfully</div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: ()=> dispatch(actionCreators.signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignOut)