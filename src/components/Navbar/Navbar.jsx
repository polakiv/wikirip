import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
  
import { makeStyles } from '@material-ui/core/styles';   
import Grid from '@material-ui/core/Grid'; 

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


const Navbar = () => {
    return (<Grid className="bottomnav">
        <nav className={s.nav}>
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink exact to="/" activeClassName={s.activeLink}>Главная</NavLink>
            </Grid>
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink to="/signin" activeClassName={s.activeLink}>Войти</NavLink>
            </Grid>  
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink to="/addburial" activeClassName={s.activeLink}>Добавить местоположение</NavLink>
            </Grid>
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </Grid>
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </Grid>
            <Grid className={`${s.item} ${s.active}`}>
                <NavLink to="/addusersburial" activeClassName={s.activeLink}>Добавить эдюзерсбуриал</NavLink>
            </Grid>
        </nav>
    </Grid>
    )
}

export default Navbar;