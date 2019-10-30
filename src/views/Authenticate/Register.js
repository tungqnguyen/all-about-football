import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button } from '../../Components/AuthForm';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={() => props.signUp(userName, password)}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
        {props.isAuthenticated && <Redirect to="/" />}
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (username, password) => dispatch(actionCreators.signUp(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)