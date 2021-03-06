import React from 'react';

import styles from './Button.module.css';

const button = (props) => (
  <button className={styles.Button}>{props.children}</button>
);

export default button;