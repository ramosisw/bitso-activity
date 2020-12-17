import AppBarComponent from './Components/AppBarComponent';
import MarketComponent from './Components/MarketComponent';
import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

function App() {
  const [_markets, setMarkets] = useState([]);
  const [_period, setPeriod] = React.useState(10);

  useEffect(() => {
    fetch("https://api.bitso.com/v3/available_books/")
      .then(res => res.json())
      .then(
        (result) => {
          let bookList = result
            .payload
            .map(i => i.book);
          let markets = [...new Set(
            bookList
              .map(i => i.split("_")[1].toUpperCase())
          )].map(market => ({
            name: market,
            books: bookList.filter(book => book.includes(`_${market.toLowerCase()}`))
          }));
          setMarkets(markets);
        },
        (error) => { }
      )
  }, [])

  const handlePeriod = (event, newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div>
      <AppBarComponent handlePeriod={handlePeriod} period={_period} />
      <Container >
        {_markets.map((market) => (
          <MarketComponent key={market.name} market={market.name} books={market.books} period={_period} />
        ))}
      </Container>
    </div>
  );
}

export default App;
