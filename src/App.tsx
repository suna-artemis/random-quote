import './App.css';

import { useRequest, useCounter, useUpdate, useWhyDidYouUpdate } from 'ahooks';
import { getQuotes } from './apis/QuoteApis';

type QuoteObj = { quote: string; author: string };

interface QuoteProps {
  quoteObj: QuoteObj;
  color: string;
  fetchNewQuote: () => void;
}

const Quote = ({
  color,
  fetchNewQuote,
  quoteObj: { quote, author },
}: QuoteProps) => {
  useWhyDidYouUpdate('Quote', {
    quote,
    author,
  });

  return (
    <div id='quote-box'>
      <div id='text' className='fade-in'>
        {quote}
      </div>
      <div id='author'>{author}</div>
      <div
        id='new-quote'
        className={`bg-${color}`}
        onClick={fetchNewQuote}>{`new quote`}</div>
      <a
        target='_blank'
        href='https://twitter.com/intent/tweet'
        id='tweet-quote'
        rel='noreferrer'>{`twitter`}</a>
    </div>
  );
};
function App() {
  const { data, loading } = useRequest(getQuotes);
  const { quotes }: { quotes: QuoteObj[] } = data?.data ?? { quotes: [] };
  const [count, { inc }] = useCounter(0);

  const index = Math.trunc(Math.random() * quotes.length);
  const quoteObj = quotes.length ? quotes[index] : undefined;

  const rerender = useUpdate();

  const colors = ['red', 'green', 'blue', 'brown'];
  const color = colors[count % colors.length];

  return (
    <div className={['container', color, `bg-${color}`].join(' ')}>
      {!loading && quoteObj ? (
        <Quote
          key={color}
          color={color}
          quoteObj={quoteObj}
          fetchNewQuote={() => {
            inc();
            rerender();
          }}
        />
      ) : (
        <>{loading}</>
      )}
    </div>
  );
}

export default App;
