==============================

Получение / ответ зарегистрированного пользователя 

--------------------------------
----------Апи / api.js---------- 
--------------------------------

export const authAPI = {
    me() {
        return instance.get(`auth/me`); 
    },
	 
--------------------------------
---------- auth-reducer.js ---------- 
--------------------------------	

import {authAPI} from "../api/api";

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
	
--------------------------------
---------- HeaderContainer.jsx ---------- 
--------------------------------

import {logout} from "../../redux/auth-reducer";

   render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
--------------------------------
---------- Header.jsx ---------- 
--------------------------------	

 <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div> 

=======================================================================================================================================================================================================================================================================

Отправка данных из формы на авторизацию 
--------------------------------
---------- Login.jsx ---------- 
--------------------------------
import {required} from "../../utils/validators/validators"; 
import {login} from "../../redux/auth-reducer";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
			///////////
			
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
	
	--------------------------------
---------- auth-reducer ---------- 
--------------------------------

import {authAPI} from "../api/api";


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

--------------------------------
----------Апи / api.js---------- 
--------------------------------
export const authAPI = {
   /* me() {
        return instance.get(`auth/me`);
    },*/
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },

=======================================================================================================================================================================================================================================================================	