import React, { Component } from 'react';
import  MyNotifications  from './MyNotifications';
import  MyPosts  from './MyPosts';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {


    render(){
        return(
        <div>
            <h1>
                My Profile
            </h1>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <MyNotifications/>
                </Grid>
                <Grid item xs={6}>
                    <MyPosts />
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default Profile;
