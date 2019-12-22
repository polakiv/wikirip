import React from "react";
import Preloader from "../components/common/Preloader/Preloader";
 
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


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Grid>loading...</Grid>} >
            <Component {...props} />
        </React.Suspense>
    };
}