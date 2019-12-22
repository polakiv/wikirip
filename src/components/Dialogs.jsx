import React from 'react'; 
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


function DialogItem(props) { 
	let path = "/dialogs/" + props.id;
	return (	  
		<Grid className='dialog active'>
		  <NavLink to={path}>{props.name}</NavLink>
		</Grid>
	);
  }
function Dialogs(props) {
	let path = "/dialogs/" + props.id;
  return (     
	  <Grid className='dialogs'>
		  <Grid className="dialogsItems">
			  <DialogItem name="Dimych" id="1" />
		 	<Grid className="dialog">
				<NavLink to={path}>{props.name}</NavLink>
			</Grid>	
		</Grid>
	  </Grid>
  );
}

export default Dialogs;