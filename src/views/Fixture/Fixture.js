import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import {matchLogo, displayTimeOrResult} from '../../util/util'
import WithPanel from '../../hoc/WithPanel';


class Fixture extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    let fixture = [];
    if (this.props.nextFixtureIndex) {
      const {fixtures: matches} = this.props;
      for (let i= this.props.nextFixtureIndex; i < matches.length; i++) {
        fixture.push (
          <ListGroupItem style={{background:'#F9FBDC', fontFamily:'Cursive'}}>
            <div>{new Date(matches[i]["event_date"]).toDateString()}</div>
            <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div style={{margin:7}}> {matches[i].homeTeam['team_name']}</div> 
              <img src={matchLogo(matches[i].homeTeam["team_name"])} alt="" style={{width:'50px', height:'50px'}} />
              <div style={{margin:'20px'}}> {displayTimeOrResult(matches[i])} </div>
              <img src={matchLogo(matches[i].awayTeam["team_name"])} alt="" style={{width:'50px', height:'50px'}}/>
              <div style={{margin:7}}> {matches[i].awayTeam['team_name']}</div>
            </div>
          </ListGroupItem>
        )
      // })
      }
  }

    return (
      <div style={{height: '50vh'}}>
        <WithPanel style={{marginTop:20, paddingBottom: 30, marginBottom:20}}>
        <ListGroup > 
          {fixture}
        </ListGroup>
        </WithPanel>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // fetched: state.reducer.fetched,
    fixtures: state.reducer.matches,
    nextFixtureIndex: state.reducer.nextFixtureIndex,
  }
}

export default connect(mapStateToProps, null)(Fixture)