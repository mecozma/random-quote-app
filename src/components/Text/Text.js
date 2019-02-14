import React from 'react';

import styles from './Text.module.css';

const text = (props) => (
  <div id={styles.text}>
    <p>&quot;{props.text}&quot;</p>
  </div>
);

export default text;