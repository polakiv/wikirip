import React from 'react';
import s from './Post.module.css';
 
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


const Post = (props) => {
  return (
    <Grid className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
        { props.message }
          <Grid>
        <span>like</span> { props.likesCount }
      </Grid>
    </Grid>
  )
}

export default Post;