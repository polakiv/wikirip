import React from 'react';
import s from './Friends.module.css';
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

    return <Grid className={s.dialog + ' ' + s.active}>
             <NavLink to={path}><img alt="fds" className={s.img} src={props.img} />{props.name}</NavLink>
            </Grid>
}
 

const Friends = (props) => {

   
    let friendsElements = props.state.friends.map ( d => <FriendItem name={d.name} id={d.id} img={d.img} />); 

    return (
        <Grid className={s.dialogs}>
            <Grid className={s.dialogsItems}> 
              { friendsElements }
            </Grid> 
        </Grid>
    )
}

export default Friends;