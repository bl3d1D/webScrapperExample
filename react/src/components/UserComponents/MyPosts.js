import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getPosts, deletePost  } from '../../actions/userActions';
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


const editButtonStyle = {
    width: '35px',
    height: '35px',
    fontSize: '25px',
};

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

let id = 0;
function createData(id, title, editIcon, deleteIcon) {
  id += 1;
  return {id, title, editIcon, deleteIcon};
}


const rows = [
  createData(1, 'Frozen yoghurt',<Fab color="secondary" style={editButtonStyle}><Icon>edit_icon</Icon></Fab> ,<DeleteIcon />),
  createData(1, 'Frozen yoghurt',<Fab color="secondary" style={editButtonStyle}><Icon>edit_icon</Icon></Fab>, <DeleteIcon />),
];

class MyPosts extends Component{

    constructor(props){
        super(props);
        this.openAddPost = this.addPost.bind(this);
        //this.closeModal = this.closeModal.bind(this);
        //this.deleteNotification = this.deleteNotification.bind(this);
        this.state = {
            visible : false,
            addPostVisible: false,
            details : null
        }
    }

    componentWillMount(){
      this.props.getPosts();
    }

    addPost(){
        this.setState({ addPostVisible: true });
    }


    render(){
        console.log(this);
        const { classes } = this.props;

          return (

            <div>
                <h2>My Posts</h2>
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Title</CustomTableCell>
                        <CustomTableCell align="right">Edit</CustomTableCell>
                        <CustomTableCell align="right">Delete</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow className={classes.row} key={row.id}>
                          <CustomTableCell component="th" scope="row">
                            {row.title}
                          </CustomTableCell>
                          <CustomTableCell className={classes.icon} align="right">{row.editIcon}</CustomTableCell>
                          <CustomTableCell align="right">{row.deleteIcon}</CustomTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <ClipLoader
                      sizeUnit={"px"}
                      size={150}
                      color={'#123abc'}
                      loading={this.props.postsLoading}
                    />
                  </Table>
                </Paper>
                <Button variant="contained" className="saveButton" onClick={() => this.openAddPost()}>Add Post</Button>
            </div>
          )
    }
}

const mapStateToProps = state => ({
  Posts : state.Userdata.postedNotifications,
  postsLoading : state.Userdata.postsLoading
});

MyPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {getPosts} )(withStyles(styles)(MyPosts));