import React from 'react';
import classes from './Header.module.css'
import {NavLink, Link} from 'react-router-dom';

const NavigationItem = (props) => (
  <li className ={classes.NavigationItem}>
    <NavLink to= {props.to}> {props.children} </NavLink>
  </li>
  )

  export default NavigationItem;