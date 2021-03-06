import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Matches from './views/Matches/Matches';
import Tables from './views/Tables/Tables';
import Fixture from './views/Fixture/Fixture';
import Archives from './views/Archives/Archives'
import Header from './Header/Header';
import Aux from './hoc/Auxiliary';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import PrivateRoute from './hoc/PrivateRoute';
import Register from './views/Authenticate/Register';
import Login from './views/Authenticate/Login';
import SignOut from './views/Authenticate/SignOut';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    }
  }
  componentWillMount() {
    // this.props.checkAuth();
  }
  //data leakage here since we havent sign in yet but already got data from render()
  componentDidMount() {
    this.props.checkAuth();
  }
  render () {
    if(this.props.token) {
      this.props.onGetMatches();
      this.props.onGetHighlights();
      this.props.onGetCollection();
      this.props.onGetNextFixture();
    }
    return (
        <Aux>
          <Header/>
          <main>
          <Switch>
            <PrivateRoute path="/"  exact component={Matches} />
            <PrivateRoute path="/tables"  exact component={Tables} />
            <PrivateRoute path="/fixtures"  exact component={Fixture} />
            <PrivateRoute path="/archives"  exact component={Archives} />
            <Route path = "/register" component = {Register} />
            <Route path="/login" component={Login} />
            <Route path = "/signout" component = {SignOut} />
          </Switch>
          </main>
        </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    // token: state.authReducer.token
    token: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMatches: (leagueName) => dispatch(actionCreators.getMatch()),
    onGetHighlights: () => dispatch(actionCreators.getHighlights()),  
    onGetCollection: () => dispatch(actionCreators.getCollection()),
    onGetNextFixture: () => dispatch(actionCreators.getNextFixture()),  
    checkAuth: () => dispatch(actionCreators.checkAuth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
