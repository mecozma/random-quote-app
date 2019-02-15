import React, {Component} from 'react';
import axios from 'axios';

import styles from './QuoteBox.module.css';
import Text from '../../components/Text/Text';
import Author from '../../components/Author/Author';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import TweetQuote from '../../components/TweetQuote/TweetQuote';
import NewQuote from '../../components/NewQuote/NewQuote';

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state= {
      quotes: [
        {
          quote: 'To improve is to change, so to be perfect is to have changed often.',
          author:"Winston Churchill"
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return(
      <div  id={styles.quoteBox}>
        <Text text={this.state.quotes[0]['quote']}/>
        <Author text={this.state.quotes[0]['author']} />
        <Aux>
          <TweetQuote />
          <NewQuote />
        </Aux>
      </div>
    )
  }
}