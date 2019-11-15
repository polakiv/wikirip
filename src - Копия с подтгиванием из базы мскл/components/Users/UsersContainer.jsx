import React from 'react';
import {connect} from 'react-redux';
import {
    follow, 
    setUsers, 
    unfollow
} 
from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() { 
        axios.get(`https://wikirip.site/index.php?route=api/product`)
            .then(response => { 
                this.props.setUsers(response.data.items);
              //  this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

     

    render() {
        return <>
            <Users      users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
             />
        </>
    } 
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, 
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers})(UsersContainer);