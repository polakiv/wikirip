import React from 'react';
 
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

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {

        return (
            <Grid>
                {!this.state.editMode &&
                <Grid>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                </Grid>
                }
                {this.state.editMode &&
                <Grid>
                    <input onChange={this.onStatusChange} autoFocus={true}
                           onBlur={this.deactivateEditMode.bind(this)}
                           value={this.state.status}/>
                </Grid>
                }
            </Grid>
        )
    }
}

export default ProfileStatus;