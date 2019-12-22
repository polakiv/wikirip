import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { YMInitializer } from 'react-yandex-metrika';
 
import PropTypes from 'prop-types';
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

const Header = (props) => {
    return  <header className={s.header}>  
    <YMInitializer accounts={[54507646]} options={{webvisor: true}}/>
    <Grid className="border_bottom_grey font_086em display_none">
        <Grid className="inline">
                    Помощь семьям и друзьям при потере любимого умершего
        </Grid>  
    </Grid>  
	 <Grid className={s.loginBlock}>
            { props.isAuth
                ? <Grid>{props.login} - <button onClick={props.logout}>Log out</button> </Grid>
                : <NavLink to={'/login'}>Login</NavLink> }
        </Grid> 
    <Grid className="logo">
        <Grid className="logo_img">
            <NavLink to="/"> 
                <img src="https://wikirip.site/image/catalog/products/logo.png" className="logo_main" title="Найти могилу - WikiRIP" alt="Найти могилу - WikiRIP" />
            </NavLink>
        </Grid>
        <Grid className="contein_logo_text">
            <NavLink to="/">
                <span className="logo_text">WikiRiP</span>
                <span className="logo_slogan"><h1>планы кладбищ России и Украины</h1></span>
            </NavLink>
        </Grid>
    </Grid> 
</header>  


const UserReadyLogin = ({ name, imgUrl }) => {
    return (
      <React.Fragment>
        <p>Привет, {name}!</p>
        <img src={imgUrl} alt="profle" />
      </React.Fragment>
    )
  }
  
  UserReadyLogin.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }
}

export default Header