import React, {Component} from 'react'
import Slider from '../../Components/Slider'
import VideoHighlights from '../../Components/VideoHighlights'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import VideoModal from '../../Components//VideoModal';
// import VideoModal1 from '../../Components//VideoModal1';
import MatchContext from '../../context/MatchContext';
import WithPanel from '../../hoc/WithPanel';

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
      currentHighlight:`<div></div>`,
      title:null,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    // this.props.onGetMatches();
    // this.props.onGetHighlights();
  }

  findNextFixture(matchData) {
    const today = new Date();
    let closest = null;
    for (let i = 0; i < matchData.length; i++) {
      if (new Date(matchData[i]["event_date"]) - today > 0) {
        closest = {
          index : i
        }
        return closest
      }
    }
  }
  getDisplayFixtures(nearestNextMatch) {
    const { matches} = this.props ;
    // const idx = nearestNextMatch.index;
    const idx = nearestNextMatch;
    //check whether there is still enough fixtures to display
    if (idx + 2 <= matches.length - 1) {
      return [matches[idx-2], matches[idx - 1], matches[idx], matches[idx+1],matches[idx+2]]
    }
    return [];
  }
  toggleModal(embed=`<div></div>`, title=null){
    this.setState({
      modal: !this.state.modal,
      currentHighlight: embed,
      title
    })
  }
  render () {
    let slider = null;
    let highlights = null;
    if (this.props.nextFixtureIndex) {
          const fixtureArray = this.getDisplayFixtures(this.props.nextFixtureIndex);
          slider = <Slider matches = {fixtureArray}/>;
    }
    if (this.props.fetchedHighlights) {
      highlights = <VideoHighlights highlights={this.props.highlights} toggleModal = {this.toggleModal}/>
    }
    return (
      <div style={{fontFamily:'Cursive'}}>
        <VideoModal toggleModal={this.toggleModal} modal={this.state.modal} 
              video={{ currentHighlight:this.state.currentHighlight,
              title:this.state.title }}/>
        <WithPanel style={{marginTop:20, paddingBottom: 30}}>
          <div style={{textAlign:'center', marginBottom:10, fontSize:22}}>
            Upcoming Matches
          </div>  
          {slider}
        </WithPanel>
        <WithPanel style={{marginTop:20, marginBottom:20, paddingBottom: 30}}>
          <div style={{textAlign:'center', marginBottom:10, fontSize:22}}>
            Latest Highlights
          </div>
          <MatchContext.Provider value ={{ toggleModal: this.toggleModal }}>
            <div style={{marginTop:10,}}>{highlights}</div>
          </MatchContext.Provider>
        </WithPanel>
      </div>

      )
  }
}
const mapStateToProps = state => {
  return {
    matches: state.matches,
    fetched: state.fetched,
    highlights: state.highlights,
    fetchedHighlights: state.fetchedHighlights,
    nextFixtureIndex: state.nextFixtureIndex,
  }
}

export default connect(mapStateToProps, null)(Matches)

