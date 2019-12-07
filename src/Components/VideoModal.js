/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

class VideoModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={()=> this.props.toggleModal()} 
          size='lg' 
          // contentClassName={styles.videoModal} 
          style={{ width:'560px'}}
          >
          <div>
          {parse(this.props.video.currentHighlight)}
          </div>
        <ModalFooter>
          <Button color="primary" onClick={() => this.props.saveToCollection(this.props.videoIndex)}>Save As Favorite</Button>{' '}
          <Button color="secondary" onClick={()=> this.props.toggleModal()}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveToCollection : (videoIndex) => dispatch(actionCreators.saveToCollection(videoIndex))
  }
}

export default connect(null, mapDispatchToProps)(VideoModal);