import React, {Component} from 'react'
import Slider from '../../Components/Slider'
import VideoHighlights from '../../Components/VideoHighlights'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import VideoModal from '../../Components//VideoModal';
import MatchContext from '../../context/MatchContext';

class Matches extends Component {
  static getDerivedStateFromProps(props, state) {
    // console.log('change', props.matches);
    return state;
  }

  constructor(props) {
    super(props);
    this.state = {
      matches: null,
      modal:false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.onGetMatches();
    this.props.onGetHighlights();
    // this.findNextFixture(dummyData.api.fixtures)

  }

  findNextFixture(matchData) {
    const today = new Date();
    let closest = null;
    for (let i = 0; i < matchData.length; i++) {
      if (new Date(matchData[i]["event_date"]) - today > 0) {
        closest = {
          match: matchData[i],
          index : i
        }
        return closest
      }
    }
  }
  getDisplayFixtures(nearestNextMatch) {
    const { matches} = this.props ;
    const idx = nearestNextMatch.index;
    //check whether there is still enough fixtures to display
    if (idx + 2 <= matches.length - 1) {
      return [matches[idx-2], matches[idx - 1], nearestNextMatch.match, matches[idx+1],matches[idx+2]]
    }
    return [];
  }
  toggleModal(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  render () {
    let slider = null;
    let highlights = null;
    if (this.props.fetched) {
      const nextMatch = this.findNextFixture(this.props.matches);
      const fixtureArray = this.getDisplayFixtures(nextMatch);
      // console.log('match 2b displayed', fixtureArray);
      slider = <Slider matches = {fixtureArray}/>;
    }
    if (this.props.fetchedHighlights) {
      highlights = <VideoHighlights highlights={this.props.highlights} toggleModal = {this.toggleModal}/>
    }
    return (
      <div>
      {slider}
      <div style={{marginTop:10}}>{highlights}</div>
      </div>

      )
  }
}
const mapStateToProps = state => {
  return {
    matches: state.matches,
    fetched: state.fetched,
    highlights: state.highlights,
    fetchedHighlights: state.fetchedHighlights
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMatches: (leagueName) => dispatch(actionCreators.getMatch()),
    onGetHighlights: () => dispatch(actionCreators.getHighlights())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)

