import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles((theme) => ({
  appBarSpacer: {
    marginTop: theme.spacing(2),
  },
  toggleButton: {
    textTransform: "none"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bitso Activity
          </Typography>
          <ToggleButtonGroup
            value={props.period}
            exclusive
            onChange={props.handlePeriod}
            aria-label="time period"
          >
            <ToggleButton className={classes.toggleButton} value={5} aria-label="five seconds">
              5s
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value={10} aria-label="ten seconds">
              10s
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer} />
    </div>
  );
}
