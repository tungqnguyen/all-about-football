import React, {useState}from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button } from '../../Components/AuthForm';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card>
      <Form>
        <Input type="username" placeholder="username" value={username}
          onChange= {e => setUsername(e.target.value)}/>
        <Input type="password" placeholder="password" value={password}
          onChange= {e => setPassword(e.target.value)} />
        <Button onClick={() => props.signIn(username, password)}>Sign In</Button>
      </Form>
      <Link to="/register">Don't have an account?</Link>
      {props.isAuthenticated && <Redirect to="/" />}
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (username, password) => dispatch(actionCreators.signIn(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);