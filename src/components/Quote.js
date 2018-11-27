import React, { Component } from 'react';
import './Quote.css';
import twitterIcon from '../img/twitter-square.svg';
import quoteIcon from '../img/quote-left.svg';

export default class Quote extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      quote: {},
    };
  }

  getRandomQuote() {
    fetch( 'https://talaikis.com/api/quotes/random/' )
      .then( ( res ) => res.json() )
      .then( ( res ) => {
        this.setState( {
          quote: res,
        } );
      } )
      .catch( ( err ) => {
        console.error( err );
      } );
  }

  shareOnTwitter( event ) {
    event.preventDefault();
    const href = event.target.parentNode.href;
    window.open( href, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0' );
  }

  componentWillMount() {
    this.getRandomQuote();
  }

  render() {
    const { quote, author } = this.state.quote;
    return (
      <div className="Quote">
        <p className="Quote__icon">
          <img src={ quoteIcon } alt="Quote icon" />
        </p>
        <p className="Quote__text">
          { quote }
        </p>
        <p className="Quote__author">
          - { author }
        </p>
        <button onClick={ this.getRandomQuote.bind( this ) } className="Quote__get-quote-btn">
          Get Another Quote
        </button>
        <a
          href = {
            `https://twitter.com/intent/tweet?via=devHammed&text=${ quote } - ${ author }`
          }
          onClick={ this.shareOnTwitter.bind( this ) }
          className="Quote__share-twitter-btn">
          <img src={ twitterIcon } alt="Share on Twitter" />
        </a>
      </div>
    )
  }

}
