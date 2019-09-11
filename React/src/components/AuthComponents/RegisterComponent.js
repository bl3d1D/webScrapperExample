import React, { Component } from 'react';
import { Router,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Register } from '../../actions/authActions';
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

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      width: '100%',
      display : 'inline-block',
      marginTop : '10px',
      position : 'relative',
      left: 0
    },
    textField: {
      flexBasis: 200,
    },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class RegisterComponent extends Component {
        constructor(props){
        super(props);

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        console.log(event.target.name)
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });
    }


    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onSubmit(event){
        event.preventDefault();

        let data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        this.props.Register(data);
    }

  render(){
    const { classes } = this.props;
    console.log(this.props);
    return(
        <div>
            <div id="register">
                <div className="container">
                    <div id="register-row" className="row justify-content-center align-items-center">
                        <div id="register-column" className="col-md-6">
                            <div id="message">
                                <Dialog
                                    open={this.props.error}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                    >
                                    <DialogTitle id="alert-dialog-slide-title">
                                        {"Error"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        {this.props.message.split('\n').map((item, key) => {
                                            return <div id={key}>{item}<br/></div>
                                        })}
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <div id="register-box" className="col-md-12">
                                <form id="register-form" onSubmit={this.onSubmit}>
                                    <TextField
                                        className={classes.margin}
                                        label="Username"
                                        name = "username"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value = {this.state.username}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                        }}
                                    />
                                    <TextField
                                        className={classes.margin}
                                        label="Name"
                                        name = "name"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value = {this.state.name}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                        }}
                                    />
                                    <TextField
                                        className={classes.margin}
                                        label="Email"
                                        name = "email"
                                        variant="outlined"
                                        onChange={this.onChange}
                                        value = {this.state.email}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                        }}
                                    />
                                    <TextField
                                        className={classes.margin}
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
                                        <Button variant="contained" color="secondary" type="submit">Submit</Button>
                                        <Link to={"/login"}> <Button variant="contained" color="secondary">Login here</Button></Link>
                                    </div>
                                    <div id="register-link" className="text-right">
                                        
                                    </div>
                                </form>
                            </div>
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
});

export default withStyles(styles)(connect(mapStateToProps, {Register})(RegisterComponent));