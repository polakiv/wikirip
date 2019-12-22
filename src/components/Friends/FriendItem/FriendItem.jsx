import React from 'react'; 
import s from './../Friends.module.css';
import {NavLink} from "react-router-dom";
 
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

const FriendItem = (props) => {
    let path = "/friends/" + props.id;
 
    return <Grid className={s.friend + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </Grid>
} 

export default FriendItem;