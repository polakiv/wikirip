
import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';  
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})); 
 

class SignIn extends Component {
  
  componentDidMount() {
    const _onInit = auth2 => {
      console.log('init OK', auth2)
    }
    const _onError = err => {
      console.log('error', err)
    }
    window.gapi.load('auth2', function() {
      window.gapi.auth2
        .init({ // не забудьте указать ваш ключ в .env
          client_id:
            process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError)
    })
  }
  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(googleUser => {
    
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())

      // токен
      const id_token = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + id_token)
	  this.setState({
			name: profile.getName(),
		})
    })
  }
  signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
	GoogleAuth.signOut().then(
	() => {
		this.setState({
			name: null,
		})
	},
	() => console.log('signout error.')
    )
  }
  
  render() {
	const name  = this.state
    return (
      <div className="App">
        <header className="App-header">
	<p> Привет, { name }!</p>
          <button onClick={this.signIn}>Log in</button>
          <button onClick={this.signOut}>Log out</button>
        </header>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid className="paper"> 
        <Typography component="h1" variant="h5">
          Войдите с помощью Google, либо используя форму входа
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Ваш Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"У вас нет аккаунта? Давайте сделаем!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
      </div>
    )
  }
}
  

export default  SignIn 