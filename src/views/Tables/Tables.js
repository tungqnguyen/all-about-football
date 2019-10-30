import React, {Component} from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import WithPanel from '../../hoc/WithPanel'
import { matchLogo } from '../../util/util';

class Standings extends Component {
  componentDidMount() {
    this.props.onGetStandings();
  }
  render() {
    if(this.props.fetchedStandings){
    }
    const renderForm = (forme) => {
      return forme.split('').map(el => {
        let dom = null;
        if(el === 'W') {
          dom = <div style={{backgroundColor:'green', marginRight:5}}>{el}</div>
        }
        else if(el === 'D') {
          dom = <div style={{backgroundColor:'grey', marginRight:5}}>{el}</div>
        }
        else {
          dom = <div style={{backgroundColor:'red', marginRight:5}}>{el}</div>

        }
        return dom
      })
    }
    return (
      <WithPanel style={{marginTop:20, marginBottom:20}}>
      <Table dark style={{fontFamily:'Cursive'}}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Points</th>
              <th>Matches Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals For</th>
              <th>Goals Against</th>
              <th>Goal Difference</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
          { 
            (this.props.fetchedStandings) ?
              this.props.standings.map((el)=>{
                return (  
                  <tr>
                    <th scope="row">{el.rank}</th>
                    <td>
                      <img alt="" src={matchLogo(el.teamName)} style={{height:40, width:30}}/> {el.teamName}
                    </td>
                    <td>{el.points}</td>
                    <td>{el.all.matchsPlayed}</td>
                    <td>{el.all.win}</td>
                    <td>{el.all.draw}</td>
                    <td>{el.all.lose}</td>
                    <td>{el.all.goalsFor}</td>
                    <td>{el.all.goalsAgainst}</td>
                    <td>{el.goalsDiff}</td>
                    {/* <td>{renderForm(el.forme)}</td> */}
                    <td style={{display:'flex'}}>
                      {renderForm(el.forme)}
                    </td>
                  </tr>
                )
              })
              :null
          }
          </tbody>
        </Table>
      </WithPanel>
    );
  }
}
const mapStateToProps = state => {
  return {
    standings: state.reducer.standings,
    fetchedStandings: state.reducer.fetchedStandings,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onGetStandings: () => dispatch(actionCreators.getStandings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Standings)