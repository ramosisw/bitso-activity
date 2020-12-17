import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBarComponent from './Components/AppBarComponent';
import MarketComponent from './Components/MarketComponent';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// See https://material-ui.com/es/customization/palette/
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#5B764D",
      contrastText: "#F2F2F2"
    },
    secondary: {
      main: "#708C5D",
      contrastText: "#F2F2F2"
    }
  },
  typography: {
    useNextVariants: true,
    palette: {
      primary: "#F2F2F2"
    }
  },
  root: {
    display: 'flex',
  },
});

function App() {
  const [_markets, setMarkets] = useState([]);

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
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent />
      <Container >
        {_markets.map((market) => (
          <MarketComponent key={market.name} market={market.name} books={market.books} />
        ))}
      </Container>
    </ThemeProvider >
  );
}

export default App;
