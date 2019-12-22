import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';
 
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


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <Grid>
            { !editMode &&
            <Grid>
                <b>Status: </b> <span onDoubleClick={ activateEditMode }>{props.status || "-------"}</span>
            </Grid>
            }
            {editMode &&
            <Grid>
                <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
                       value={status} />
            </Grid>
            }
        </Grid>
    )
}


export default ProfileStatusWithHooks;