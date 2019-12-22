import React from 'react';
import s from './../Dialogs.module.css';
 
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

const Message = (props) => {
    return <Grid className={s.dialog}>{props.message}</Grid>
}

export default Message;