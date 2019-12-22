import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
 
import { makeStyles } from '@material-ui/core/styles';  
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  textField: {
    margin: 'auto',
    width: '100%',
    float: 'left',
    maxWidth: 500,
  },
}));

let Preloader = (props) => {
	const classes = useStyles();
	
    return <Grid className='preload' style={{ backgroundColor: 'transparent' }, { width: '100%' }, { float: 'left' }, { position: "absolute" }, { zIndex: "999" }}>
    <img style={{ backgroundColor: 'transparent' }, { width: '42px' }, { margin: 'auto' }} src={preloader} />
</Grid>
}

export default Preloader;