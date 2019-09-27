/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import parse from 'html-react-parser';
import styles from './css/SwiperHighlight.module.css'

class VideoModal extends React.Component {
  render() {
    console.log('hi', this.props.video.currentHighlight);
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
          <Button color="primary" onClick={this.toggle}>Save As Favorite</Button>{' '}
          <Button color="secondary" onClick={()=> this.props.toggleModal()}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;