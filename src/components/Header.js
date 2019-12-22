import React from 'react'; 
import logo from './../logo.svg';
 
import { makeStyles } from '@material-ui/core/styles';  import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    }, 
}));

function Header() {
  return (
    
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid className="">
        <NavLink to={'/login'}>Логинься</NavLink>
      </Grid>
	   
  );
}

export default Header;