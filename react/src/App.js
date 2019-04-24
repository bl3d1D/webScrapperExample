import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import MyAppBar from './components/MyAppBar';
import { connect } from 'react-redux';
import { IsLoggedIn } from './actions/authActions'
import { withRouter } from 'react-router-dom';

class App extends Component {

    componentWillMount(){
        this.props.IsLoggedIn();
    }


    render() {
        return (
            <div>
                <MyAppBar />
                <div className="landing-page" style={{width: '100%', margin : 'auto'}}>
                    <div className="category-container">
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {IsLoggedIn})(App));