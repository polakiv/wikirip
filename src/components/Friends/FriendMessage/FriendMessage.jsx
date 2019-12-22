import React from 'react';
import s from './../Friends.module.css';
 
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

const FriendMessage = (props) => {
    return <Grid className={s.friend}>{props.friendmessage}</Grid>
}

export default FriendMessage;