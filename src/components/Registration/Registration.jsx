import React from 'react'; 
//import Login from './Login/Login';
//$.import_js('/path_to_project/scripts/somefunctions.js');
 
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

const Registration = () => {

    
// debugger;
 //   let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <Grid className="Registration">
            <h3>Зарегистрируйтесь</h3> 
            <Grid className="ulogi">
                <Grid className="ulogin_form">
                 <Grid data-ulogin="display=small;fields=first_name,last_name,email;optional=phone,city,country,nickname,sex,photo_big,bdate,photo;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=https%3A%2F%2Fwikirip.site%2Findex.php%3Froute%3Dmodule%2Fulogin%2Flogin%26backurl%3Dcommon%2Fhome;callback=uloginCallback"></Grid>
                </Grid>  
            <Grid>
                <Grid>
                    <input />
                 </Grid>
                <Grid>
                    <button>Добавить себя</button>
                </Grid>
            </Grid>
            <Grid className="posts">
              
            </Grid> 
        </Grid>
        </Grid>
    )
}

export default Registration;