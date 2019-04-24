import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { getUserNotification, deleteUserNotification  } from '../../actions/userActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { ClipLoader } from 'react-spinners';




const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#ed4a55',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});

function Transition(props) {
  return <Slide direction='up' {...props} />;
}

class MyNotifications extends Component{

    constructor(props){
      super(props);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.deleteNotification = this.deleteNotification.bind(this);
      this.state = {
        visible : false,
        details : null
      };
    }

    deleteNotification(id){
      this.props.deleteUserNotification(id);
    }

    openModal = (e, row) => {

        this.setState({
            visible: true,
            details: row.description
        });
        console.log(this.state);
    }

    closeModal = (e) => {
      this.setState({ visible: false});
    }

    componentWillMount(){
      this.props.getUserNotification();
    }



    
    render(){
      const { classes } = this.props;


      return (

        <div>
          <div id="message">
              <Dialog
                  open={this.state.visible}
                  TransitionComponent={Transition}
                  keepMounted
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                  >
                  <DialogTitle id="alert-dialog-slide-title">
                      {"Description"}
                  </DialogTitle>
                  <DialogContent>
                      <div>
                          <div dangerouslySetInnerHTML={{__html: this.state.details }} />
                      </div>
                  </DialogContent>
                  <Button color="primary" autoFocus onClick={e => this.closeModal(e)}> 
                      Close
                  </Button>
              </Dialog>
            </div>
            <h2>My Notifications</h2>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Title</CustomTableCell>
                    <CustomTableCell align="right">Delete</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.Notifications.map(row => (
                    <TableRow className={classes.title} key={row.id}>
                      <CustomTableCell component="th" scope="row" onClick={e => this.openModal(e, row)}>
                        {row.title}
                      </CustomTableCell>
                      <CustomTableCell align="right"><DeleteIcon onClick={() => this.deleteNotification(row.id)}/></CustomTableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <ClipLoader
                  sizeUnit={"px"}
                  size={150}
                  color={'#123abc'}
                  loading={this.props.NotificationsLoading}
                />
              </Table>
            </Paper>
        </div>
      );

    }


}


const mapStateToProps = state => ({
  Notifications : state.Userdata.savedNotifications,
  NotificationsLoading : state.Userdata.notificationsLoading
});

MyNotifications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {getUserNotification, deleteUserNotification})(withStyles(styles)(MyNotifications));