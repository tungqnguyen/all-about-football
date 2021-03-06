import React, {Component} from 'react'
import Slider from '../../Components/Slider'
import VideoHighlights from '../../Components/VideoHighlights'
import { connect } from 'react-redux';
import VideoModal from '../../Components//VideoModal';
import MatchContext from '../../context/MatchContext';
import WithPanel from '../../hoc/WithPanel';

class Matches extends Component {
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  constructor(props) {
    super(props);
    this.state = {
      matches: null,
      modal:false,
      currentHighlight:`<div></div>`,
      title:null,
      videoIndex: -1,
    }
    this.toggleModal = this.toggleModal.bind(this);
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
    const idx = nearestNextMatch;
    //check whether there is still enough fixtures to display
    if (idx <= matches.length - 1) {
      return [matches[idx-2], matches[idx - 1], matches[idx], matches[idx+1],matches[idx+2]]
    }
    return [];
  }

  toggleModal(index, embed=`<div></div>`){
    this.setState({
      modal: !this.state.modal,
      currentHighlight: this.props.highlights[index].embed,
      title: this.props.highlights[index].title,
      videoIndex: index
    })
  }
  render () {
    let slider = null;
    let highlights = null;
    if (this.props.nextFixtureIndex) {
          const fixtureArray = this.getDisplayFixtures(this.props.nextFixtureIndex).filter(el => el != undefined);
          // console.log("next", fixtureArray, this.props.nextFixtureIndex);
          slider = <Slider matches = {fixtureArray}/>;
    } else {
      slider =<div>There are no upcoming matches, stay tuned!!</div>
    }

    if (this.props.highlights != null) {
      highlights = <VideoHighlights highlights={this.props.highlights} toggleModal = {this.toggleModal}/>
    } else {
      highlights = <div> We don't have anything new to show you today :( </div>
    }
    return (
      <div style={{fontFamily:'Cursive'}}>
        <VideoModal toggleModal={this.toggleModal} modal={this.state.modal} 
              video={{ currentHighlight:this.state.currentHighlight,
                    title:this.state.title }}
              videoIndex = {this.state.videoIndex}
                    />
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
    matches: state.reducer.matches,
    highlights: state.reducer.highlights,
    nextFixtureIndex: state.reducer.nextFixtureIndex,
  }
}

export default connect(mapStateToProps, null)(Matches)

