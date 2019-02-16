import React, {Component} from 'react';
import axios from 'axios';

import styles from './QuoteBox.module.css';
import Text from '../../components/Text/Text';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import TweetQuote from '../../components/TweetQuote/TweetQuote';
import NewQuote from '../../components/NewQuote/NewQuote';

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state= {
      quotes: []
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        console.log(response.data.quotes[0]);
        this.setState({quotes: response.data.quotes});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    let text = <p>Loading...</p>
    if (this.state.quotes.length > 2) {
      const quotes = this.state.quotes;
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomIndex];
       text = <Text 
       text={randomQuote.quote}
       author={randomQuote.author} />
      console.log("test",randomQuote.author, randomQuote.quote);
      
    }
    
    return(
      <div id="quote-box" className={styles.quoteBox}>
        {text}
        <Aux>
          <TweetQuote />
          <NewQuote />
        </Aux>
      </div>
    )
  }
}