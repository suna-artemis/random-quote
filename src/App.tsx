import './App.css';

import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';

interface QuoteProps {
  quote: string;
  author: string;
  fetchNewQuote: () => void;
}

const Quote = ({ quote, author, fetchNewQuote }: QuoteProps) => {
  return (
    <div id='quote-box'>
      <div id='text'>{quote}</div>
      <div id='author'>{author}</div>
      <div id='new-quote' onClick={fetchNewQuote}>{`fetch new quote`}</div>
      <a
        target='_blank'
        href='https://twitter.com/intent/tweet'
        id='tweet-quote'
        rel='noreferrer'>{`tweet current quote`}</a>
    </div>
  );
};

function App() {
  type Quote = { quote: string; author: string };
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quoteObj, setQuoteObj] = useState<Quote>();

  const fetchNewQuote = async () => {
    const res = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    );
    const quotesRes = await res.json();
    const quotes = quotesRes.quotes;
    setQuotes(quotes);
    const index = Math.trunc(Math.random() * quotes.length);
    setQuoteObj(quotes[index]);
  };

  const handleFetchNewQuote = () => {
    if (quotes.length) {
      const index = Math.trunc(Math.random() * quotes.length);
      setQuoteObj(quotes[index]);
    } else {
      fetchNewQuote();
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <>
      {quoteObj && (
        <Quote
          quote={quoteObj.quote}
          author={quoteObj.author}
          fetchNewQuote={handleFetchNewQuote}
        />
      )}
    </>
  );
}

export default App;
