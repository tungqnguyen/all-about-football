//this will be a panel to group every component into one section for readability
import React from 'react';
import styles from './Panel.module.css'

const withPanel = props => <div className={styles.panel} style={props.style}>{props.children}</div>

export default withPanel;