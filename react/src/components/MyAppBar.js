import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link  } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  header : {
      backgroundColor: '#ed4a56',
  }
};

function MyAppBar(props) {
    const { classes } = props;
    console.log(props);
    if(props.logged){
        return (
            <div>
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                        <Link to="/categories">
                            <Button variant="contained" className={classes.menuButton} color="secondary"><Email />Njoftimet</Button>
                        </Link>
                        <Link to="/myprofile">
                            <Button variant="contained" className={classes.menuButton} color="secondary"><AccountCircle /> Profile</Button>
                        </Link>
                        <Link to="/logout" >
                            <Button variant="contained" className={classes.menuButton} color="secondary">Logout</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }else{
        return (
            <div>
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                        <Link to="/categories">
                            <Button variant="contained" className={classes.menuButton} color="secondary"><Email />Njoftimet</Button>
                        </Link>
                        <Link to="/myprofile">
                            <Button variant="contained" className={classes.menuButton} color="secondary"><AccountCircle /> Profile</Button>
                        </Link>
                        <Link to="/login" >
                            <Button variant="contained" className={classes.menuButton} color="secondary">Login/Register</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);