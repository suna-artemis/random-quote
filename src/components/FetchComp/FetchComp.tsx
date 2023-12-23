import axios from 'axios';
import { getQuotes } from 'podo/apis/QuoteApis';
import { useEffect, useState } from 'react';

interface FetchCompProps {}
const FetchComp = ({ ...rest }: FetchCompProps) => {
  const [data, setData] = useState([]);

  const fetchRes = async () => {
    const { data } = await getQuotes();
    console.log('data', data);
  };
  useEffect(() => {
    fetchRes();
  }, []);

  return <div data-testid='fetch-comp'>FetchComp</div>;
};

export default FetchComp;
