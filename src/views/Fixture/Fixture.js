import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import * as actionCreators from '../../store/actionCreators';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';



class Fixture extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    // this.props.onGetMatches();
  }
  render () {
    let fixture = [];
    // const fixture = this.props.fixtures.map((fixture, i) => {
    if (this.props.nextFixtureIndex) {
      const {fixtures: matches} = this.props;
      for (let i= this.props.nextFixtureIndex; i < matches.length; i++) {
        fixture.push (
          <ListGroupItem>
              <div style={{display: 'flex'}}>
                <div> {matches[i].homeTeam['team_name']}</div> 
                <div>{'hello'}</div> 
                <div> {matches[i].awayTeam['team_name']}</div>
              </div>
          </ListGroupItem>
        )
      // })
      }
  }

    return (
      <div style={{height: '50vh'}}>
      <ListGroup> 
        {fixture}
      </ListGroup>
      </div>




    )
  }
}

const mapStateToProps = state => {
  return {
    fetched: state.fetched,
    fixtures: state.matches,
    nextFixtureIndex: state.nextFixtureIndex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMatches: dispatch(actionCreators.getMatch())
  }
}

export default connect(mapStateToProps, null)(Fixture)