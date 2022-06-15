import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Loading } from './components/Loading';

function App() {

  const [quote, setQuote] = useState({
    advice: '',
    id: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const getQuote = async () => {
    setIsLoading(true);
    const res = await axios.get('https://api.adviceslip.com/advice');
    setQuote({ advice: res.data.slip.advice, id: res.data.slip.id })
    setIsLoading(false);
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div className="wrapper">
      { isLoading ? <Loading /> : <Card quote={quote} getQuote={getQuote} /> }
    </div>
  );
}

export default App;
