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


class App extends Component {
  componentDidMount() {
    this.props.onGetMatches();
    this.props.onGetHighlights();
  }
  render () {
    return (
      <Aux>
        {/* {header()} */}
        <Header/>
        <main>
        <Switch>
          <Route path = "/" exact component = {Matches} />
          <Route path ="/tables" component = {Tables} />
          <Route path = "/fixtures" component = {Fixture} />
          <Route path = "/archives" component = {Archives} />
        </Switch>
        </main>
      </Aux>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMatches: (leagueName) => dispatch(actionCreators.getMatch()),
    onGetHighlights: () => dispatch(actionCreators.getHighlights()),  
    // onGetNextFixture: (matches) => dispatch(actionCreators.getNextFixture(matches)),
  }
}

export default connect(null, mapDispatchToProps)(App);
