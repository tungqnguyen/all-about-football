import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Matches from './views/Matches/Matches';
import Tables from './views/Tables/Tables';
import News from './views/News/News';
import Archives from './views/Archives/Archives'
import header from './Header/Header';
import Aux from './hoc/Auxiliary';


class App extends Component {
  render () {
    return (
      <Aux>
        {header()}
        <main>
        <Switch>
          <Route path = "/" exact component = {Matches} />
          <Route path ="/tables" component = {Tables} />
          <Route path = "/news" component = {News} />
          <Route path = "/archives" component = {Archives} />
        </Switch>
        </main>
      </Aux>

    )
  }
}

export default App;
