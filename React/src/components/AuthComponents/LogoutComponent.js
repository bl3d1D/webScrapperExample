import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Logout } from '../../actions/authActions';
import { connect } from 'react-redux';

class LogoutComponent extends Component {

    componentWillMount(){
        this.props.Logout();
    }
}






export default connect(null,{Logout})(Logout);