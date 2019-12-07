import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import VideoModal from '../../Components/VideoModal';
import WithPanel from '../../hoc/WithPanel';
import MatchContext from '../../context/MatchContext';
import VideoHighlights from '../../Components/VideoHighlights';

const Archives = (props) => {
  const [modal, setModal] = useState({toggleModal: false, highlight: `<div></div>`, title: null, videoIndex: -1})

  const toggleModal = (index, embed=`<div></div>`) => {
    // console.log('clicked ', props.userVideos);
    setModal({
      toggleModal: !modal.toggleModal,
      highlight: props.userVideos[index].videoObject.embed,
      title: props.userVideos[index].videoObject.title,
      videoIndex: index
    })

  }

  const extractVideoScripts = (userVideos) => {
    return userVideos.map(el => {
      return el.videoObject
    })
  }
  let highlights = null
  if (props.fetchedUserVideos) {
    // console.log('true', props.userVideos);

    highlights = <VideoHighlights highlights={extractVideoScripts(props.userVideos)}/>
  }
  return (
    <div>
        <VideoModal toggleModal={toggleModal} modal={modal.toggleModal} 
              video={{ currentHighlight:modal.highlight,
                    title:modal.title }}
              videoIndex = {modal.videoIndex}
                    />   
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