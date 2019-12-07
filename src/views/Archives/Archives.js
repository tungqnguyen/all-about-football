import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import VideoModal from '../../Components/VideoModal';
import WithPanel from '../../hoc/WithPanel';
import MatchContext from '../../context/MatchContext';
import VideoHighlights from '../../Components/VideoHighlights';

const Archives = (props) => {
  const [modal, setModal] = useState({modal: false})
  const [highlight, setHighLight] =  useState({highlight: null})
  // useEffect(() => {

  // }, highlight)
  const toggleModal = (embed=`<div></div>`, title=null) => {
    setModal({
      modal: !modal,
    })
    setHighLight({
      highlight: embed
    })
  }
  let highlights = null
  if (props.fetchedUserVideos) {
    console.log('true');
    highlights = <VideoHighlights highlights={props.userVideos}/>
  }
  return (
    <div>
      <VideoModal toggleModal={toggleModal} modal={modal} 
                video={{ currentHighlight:highlight,
                title: null }}/>    
      <WithPanel style={{marginTop:20, paddingBottom: 30}}>
        <div style={{textAlign:'center', marginBottom:10, fontSize:22}}>
          Your Favorite Highlights
        </div>  
        <MatchContext.Provider value ={{ toggleModal: toggleModal }}>
            <div style={{marginTop:10,}}>{highlights}</div>
        </MatchContext.Provider>      
      </WithPanel>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fetchedUserVideos: state.reducer.fetchedUserVideos,
    userVideos: state.reducer.userVideos,
  }
}

  


export default connect(mapStateToProps, null)(Archives)