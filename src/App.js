import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Matches from './views/Matches/Matches';
import Tables from './views/Tables/Tables';
import Fixture from './views/Fixture/Fixture';
import Archives from './views/Archives/Archives'
import Header from './Header/Header';
import Aux from './hoc/Auxiliary';


class App extends Component {
  render () {
    return (
      <Aux>
        {/* {header()} */}
        <Header/>
        <main>
        <Switch>
          <Route path = "/" exact component = {Matches} />
          <Route path ="/tables" component = {Tables} />
          <Route path = "/fixture" component = {Fixture} />
          <Route path = "/archives" component = {Archives} />
        </Switch>
        </main>
      </Aux>

    )
  }
}

export default App;
