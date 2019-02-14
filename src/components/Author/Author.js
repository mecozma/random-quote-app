import React from 'react';

import styles from './Author.module.css';

const author = (props) => (
  <div id={styles.author}>
    <p>—{props.text}</p>
  </div>
);

export default author;