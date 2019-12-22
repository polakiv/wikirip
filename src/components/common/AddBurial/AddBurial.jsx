import React, { useState } from 'react'; 
import cn from "classnames";
import * as axios from "axios";

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
	
class AddBurial extends React.Component {
	 
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', value3: ''};  

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }
  handleChange3(event) {
    this.setState({value3: event.target.value});
  }

  handleSubmit(event) {
    alert('Проверьте пожалуйста: ' + this.state.value1);
	axios.get(`https://wikirip.site/index.php?route=api/addburial&name=${this.state.value1}&location=${this.state.value2}`); 
    event.preventDefault();
  }

  
  render() {
    return ( <Grid className='AddBurial_AddBurial root'>
    <Paper className="paper">
	<form onSubmit={this.handleSubmit} className="container" noValidate autoComplete="off">
	<Grid className="jkl"> 
	<TextField
	id="outlined-basic"
	value={this.state.value} 
	
	onChange={this.handleChange1}
	
	className="textField"
	label="Введите фамилию, имя, город"
	margin="normal" 
	
	variant="outlined"
	></TextField>
	
	<TextField
	id="outlined-basic"
	value={this.state.value} 
	
	onChange={this.handleChange2}
	
	className="textField"
	label="Примерное местоположение, кладбище"
	margin="normal" 
	
	variant="outlined"
	></TextField>
	<TextField
	id="outlined-basic"
	value={this.state.value} 
	
	onChange={this.handleChange3}
	
	className="textField"
	label="Точное местоположение, GPS"
	margin="normal" 
	
	variant="outlined"
	></TextField>
	<Button
	type="submit"
	fullWidth
	variant="contained"
	color="primary"
	className="submit"
	>
	Добавить новое местоположение
	</Button>
	</Grid>
	</form>
    </Paper> 
	</Grid> 
    );
  }
}  

export default AddBurial;