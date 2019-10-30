import React from 'react';
import styles from './Header.module.css'
import NavigationItem from './NavigationItem';
import logo from '../assets/logo/logo.png';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {withRouter} from 'react-router-dom';

const header = (props) => {
  return (
  <header className = {styles.Header}>
    <div> <img src={logo} alt="" style={{height:50, width:100}}/> </div>
    <nav>
      <ul className= {styles.NavigationItems}>
        <NavigationItem to= "/" > Matches </NavigationItem>
        <NavigationItem to= "/tables" > Tables </NavigationItem>
        <NavigationItem to= "/fixtures" > Fixtures </NavigationItem>
        <NavigationItem to= "/archives" > Archives </NavigationItem>
        { props.token? <li className={styles.NavigationItem} ><div className={styles.SignOut} onClick= {() => {
            console.log('clicked signout');
            props.signOut(); 
            props.history.push("/signout");
            }}> Sign Out </div> </li> 
            : null }      
      </ul>
    </nav>
  </header>)
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(actionCreators.signOut()),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))