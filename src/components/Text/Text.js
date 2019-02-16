import React from 'react';

import styles from './Text.module.css';

const text = (props) => (
  <div className={styles.text}>
    <p id="text">&quot;{props.text}&quot;</p>
    <p id="author">&#8212; {props.author}</p>
  </div>
);

export default text;