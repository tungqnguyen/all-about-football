import React from 'react';
import styles from './Header.module.css'
import NavigationItem from './NavigationItem';


const header = (props) => (
  <header className = {styles.Header}>
    <div> AAF - Logo </div>
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