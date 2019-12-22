import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
 
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

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <Grid><button>save</button></Grid>
        {error && <Grid className={style.formSummaryError}>
            {error}
        </Grid>
        }
        <Grid>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </Grid>
        <Grid>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </Grid>

        <Grid>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </Grid>


        <Grid>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </Grid>
        <Grid>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Grid key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </Grid>
        })}
        </Grid>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;