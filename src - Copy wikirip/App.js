import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SearchContainer from "./components/Search/SearchContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import mainPage from "./components/mainPage/mainPage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Addburial from "./components/Addburial/Addburial";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <DialogsContainer />} />
                <Route path='/profile/:userId?'
                    render={() => <ProfileContainer />} />
                    <Route path='/addburial'
                        render={() => <Addburial />} />
                        <Route path='/users'
                            render={() => <UsersContainer />} />
                
                <Route exact path='/'
                    render={() => <SearchContainer />} />
                <Route exact path='/' component={mainPage} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Navbar /> 
            </div>
        </div>
    )
}

export default App;