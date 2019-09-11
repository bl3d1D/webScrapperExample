import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { LogIn, IsLoggedIn } from '../../actions/authActions';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      flexBasis: 200,
    },
  });

  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
class LoginComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }

    componentWillMount(){
        this.props.IsLoggedIn();
        console.log(this.props)
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onChange(event){
        console.log(event.target);
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
        event.preventDefault();

        let data = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.LogIn(data);
    }



    render(){

    console.log(this.props);
    const { classes } = this.props;
    if(this.props.success){
        this.props.history.push("myprofile");
    }
    if(this.props.logged){
        return <Redirect to="myprofile"/>
    }
    return(
        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                         <div id="message">
                             <Dialog
                                open={this.props.error}
                                TransitionComponent={Transition}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                                >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"Error"}
                                </DialogTitle>
                                <DialogContent>
                                    {this.props.message.split('\n').map((item, key) => {
                                        return <div id={key}>{item}<br/></div>
                                    })}
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={this.onSubmit}>
                                <TextField
                                    className={(classes.margin , classes.textField)}
                                    label="Username"
                                    name = "username"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    value = {this.state.username}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                                <TextField
                                    className={classNames(classes.margin, classes.textField)}
                                    variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password"
                                    name = "password"
                                    onChange={this.onChange}
                                    value = {this.state.password}
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className="form-group text-success">
                                    <Button variant="contained" color="secondary" type="submit">Login</Button>
                                    <Link to={"/register"}> <Button variant="contained" color="secondary">Register here</Button></Link>
                                </div>
                                <div id="register-link" className="text-right">
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


const mapStateToProps = state => ({
    error : state.Authdata.error,
    success : state.Authdata.success,
    message : state.Authdata.message,
    logged : state.Userdata.authenticated,
});

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, {LogIn, IsLoggedIn})(withStyles(styles)(LoginComponent));