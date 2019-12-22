import React from 'react';
import Searchrator from "../common/Searchrator/Searchrator";
import User from "./User";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
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
let Users = ({totalUsersCount, onPageChanged, users, ...props}) => {
    const classes = useStyles();
   //  debugger;
   if((users) != null){
    return <div> 
        <div className='j4444'> 
			<div className={classes.root} id='rootMain'>
				<Searchrator onPageChanged={onPageChanged}
					   totalItemsCount={totalUsersCount} /> {/* получение всех данных для блока пагинации(вверху стоит импорт) и распечатка блока пагинации Searchrator.jsx */}
			</div>
	
	{/*  if (users) users приходит в пропсах , прилетает сюда */}
		{
		 
		users.map(u => <User user={u}
							 followingInProgress={props.followingInProgress}
							 key={u.id}
							 unfollow={props.unfollow} //unfollow
							 follow={props.follow}
			/>
                )
		} 
        
			</div>  
   
        </div>  
		} else {
		return	<div className='j4444'> не найдено</div>
			}
}
export default Users;