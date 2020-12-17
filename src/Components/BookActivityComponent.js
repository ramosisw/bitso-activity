import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    flexGrow: 2,
    fontSize: 14,
  },
  lowHigh: {
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function BookActivityComponent(props) {
  const [_priceActivity, setPriceActivity] = useState({
    "high": "0.00",
    "last": "0.00",
    "created_at": "2020-12-17T07:31:05+00:00",
    "book": props.book,
    "volume": "0.0000000",
    "vwap": "0.000000",
    "low": "0.0000",
    "ask": "0.0000",
    "bid": "0.0000",
    "change_24": "0.0000"
  });
  const classes = useStyles();

  const fetchBook = () => {
    //https://api.bitso.com/v3/ticker/?book=
    fetch("https://api.bitso.com/v3/ticker/?book=" + props.book)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.success)
            setPriceActivity(result.payload);
        },
        (error) => { }
      )
    console.log(`Fetching ${props.book} every ${props.period} seconds`);
  };

  useEffect(() => {
    // fetchBook();
    const interval = setInterval(() => {
      //Fetch ticker
      fetchBook();
    }, props.period * 1000);
    return () => clearInterval(interval);
  });

  return (
    <Card className={classes.root} spacing={2}>
      <CardHeader
        title={props.book.toUpperCase().replace("_", " / ")}
        subheader={"Volume: " + _priceActivity.volume.replace(/(\d)(?=(\d{3})+(?!\d)+\.)/g, "$1,")}
      />
      <CardContent>
        <Typography variant="h5" component="h2" align="center">
          {_priceActivity.last.replace(/(\d)(?=(\d{3})+(?!\d)+\.)/g, "$1,")}
        </Typography>
        <Typography className={classes.lowHigh} color="textSecondary" align="center">
          {_priceActivity.low.replace(/(\d)(?=(\d{3})+(?!\d)+\.)/g, "$1,")} / {_priceActivity.high.replace(/(\d)(?=(\d{3})+(?!\d)+\.)/g, "$1,")}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
      </CardContent>
    </Card>
  );
}
