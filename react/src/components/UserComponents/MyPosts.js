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
import { getPosts, deletePost, savePost  } from '../../actions/userActions';
import { ClipLoader } from 'react-spinners';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { getCategories, getSubCategories} from '../../actions/categoryActions';


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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400
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
        this.openAddPost = this.openAddPost.bind(this);
        this.addPost = this.addPost.bind(this);
        this.closeAddPost = this.closeAddPost.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            category: '',
            subcategory: '',
            title: '',
            postdetails: '',
            visible : false,
            addPostVisible: false,
            details : null
        }
    }

    componentWillMount(){
      this.props.getPosts();
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    openAddPost(){
        this.props.getCategories();
        this.setState({ addPostVisible: true });
        this.props.getSubCategories(0);
    }

    addPost(){
        let data = {
            category: this.state.category,
            subcategory: this.state.subcategory,
            title: this.state.title,
            postdetails: this.state.postdetails
        }

        data = JSON.stringify(data);
        console.log(data);
        this.props.savePost(data);
        //this.setState({ [event.target.name]: event.target.value });
    }

    selectCategory(event){
        this.setState({ [event.target.name]: event.target.value });
        this.props.getSubCategories(event.target.value);

    }

    closeAddPost(){
        this.setState({ addPostVisible: false });
    }


    render(){
        console.log(this);
        const { classes } = this.props;
        let cat;
        if(typeof this.props.categories != 'undefined'){
            cat = this.props.categories.map((category) => (
            <option key={category.index} value={category.index}>{category.title}</option>
            ));
        }

        let subcat;
        console.log(this.props.subcategories);
        if(typeof this.props.subcategories != 'undefined' || this.props.subcategories.length != 0){
            subcat = this.props.subcategories.map((subcategory) => (
                <option key={subcategory.scindex} value={subcategory.scindex}>{subcategory.title}</option>
            ));
        }else{
            subcat = <MenuItem value=""><em>None</em></MenuItem>;
        }


          return (

            <div>
                <h2>My Posts</h2>
                <Dialog
                  disableBackdropClick
                  disableEscapeKeyDown
                  open={this.state.addPostVisible}
                  onClose={this.closeAddPost}
                >
                  <DialogTitle>Add Post</DialogTitle>
                  <DialogContent>
                    <form className={classes.container}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
                        <Select
                          native
                          name="category"
                          value={this.state.category}
                          onChange={this.selectCategory}
                          input={<Input id="age-native-simple" />}
                        >
                        {cat}
                        </Select>
                      </FormControl><br/>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Subcategory</InputLabel>
                        <Select
                          native
                          name="subcategory"
                          value={this.state.subcategory}
                          onChange={this.selectCategory}
                          input={<Input id="age-native-simple" />}
                        >
                        {subcat}
                        </Select>
                        <TextField
                          label="Title"
                          placeholder="Title"
                          fullWidth
                          name="title"
                          onChange={this.onChange}
                          value={this.state.title}
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                          label="Description"
                          placeholder="Description"
                          fullWidth
                          name="postdetails"
                          onChange={this.onChange}
                          value={this.state.postdetails}
                          multiline
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </FormControl>
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.closeAddPost} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.addPost} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
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
    categories : state.CategoryData.categories,
    subcategories : state.CategoryData.subcategories,
    Posts : state.Userdata.postedNotifications,
    postsLoading : state.Userdata.postsLoading
});

MyPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {getPosts, getCategories, getSubCategories,savePost} )(withStyles(styles)(MyPosts));