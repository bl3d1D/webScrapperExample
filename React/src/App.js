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
        console.log(this.props);
        return (
            <div>
                <MyAppBar logged={this.props.logged}/>
                <div className="landing-page" style={{width: '100%', margin : 'auto'}}>
                    <div className="category-container">
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    logged : state.Authdata.authenticated,
});

export default withRouter(connect(mapStateToProps, {IsLoggedIn})(App));