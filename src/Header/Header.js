import React from 'react';
import styles from './Header.module.css'
import NavigationItem from './NavigationItem';
import logo from '../assets/logo/logo.png';


const header = (props) => (
  <header className = {styles.Header}>
    <div> <img src={logo} alt="" style={{height:50, width:100}}/> </div>
    <nav>
      <ul className= {styles.NavigationItems}>
        <NavigationItem to= "/" > Matches </NavigationItem>
        <NavigationItem to= "/tables" > Tables </NavigationItem>
        <NavigationItem to= "/news" > News </NavigationItem>
        <NavigationItem to= "/archives" > Archives </NavigationItem>
      </ul>
    </nav>
  </header>
)
export default header