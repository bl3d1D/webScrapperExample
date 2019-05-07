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
import { getPosts, deletePosts, savePost  } from '../../actions/userActions';
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

class MyPosts extends Component{

    constructor(props){
        super(props);
        this.openAddPost = this.openAddPost.bind(this);
        this.addPost = this.addPost.bind(this);
        this.closeAddPost = this.closeAddPost.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            allCategories: [],
            allSubcategories: [],
            category: '',
            subcategory: '',
            title: '',
            postdetails: '',
            visible : false,
            addPostVisible: false,
            editPostVisible: false,
            details : null,
            visible: false
        }
    }

    componentWillMount(){
      this.props.getPosts();
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    deletePost(id){
      this.props.deletePosts(id);
    }

    openAddPost(){        
        this.setState({ 
            editPostVisible: false,
            category: '',
            subcategory: '',
            title: '',
            postdetails: '',
        });
        this.props.getCategories();
        this.props.getSubCategories(1);
        this.setState({ addPostVisible: true });
    }

    openEditPost(e, row){
        this.props.getCategories();
        this.props.getSubCategories(row.category.index);
        this.setState({ 
            editPostVisible: true,
            category: row.category.index,
            subcategory: row.subcategory.scindex,
            title: row.title,
            postdetails: row.description,
        });
    }

    openModal = (e, row) => {

        this.setState({
            visible: true,
            details: row.description
        });
    }

    closeModal = (e) => {
      this.setState({ visible: false});
    }

    closeEditModal = (e) => {
      this.setState({ editPostVisible: false});
    }


    addPost(){
        let data = {
            category: this.state.category,
            subcategory: this.state.subcategory,
            title: this.state.title,
            postdetails: this.state.postdetails
        }

        data = JSON.stringify(data);
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
        const { classes } = this.props;
        let cat;
        if(typeof this.props.categories != 'undefined'){
            cat = this.props.categories.map((category) => (
            <option key={category.index} value={category.index}>{category.title}</option>
            ));
        }

        let subcat;
        if(typeof this.props.subcategories != 'undefined' || this.props.subcategories.length != 0){
            subcat = this.props.subcategories.map((subcategory) => (
                <option key={subcategory.scindex} value={subcategory.scindex}>{subcategory.title}</option>
            ));
        }else{
            subcat = <MenuItem value=""><em>None</em></MenuItem>;
        }

        console.log(cat);
        console.log(subcat)


          return (

            <div>
                <div id="message">
                  <Dialog
                      open={this.state.visible}
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
                <Dialog
                  disableBackdropClick
                  disableEscapeKeyDown
                  open={this.state.editPostVisible}
                  onClose={this.closeAddPost}
                >
                  <DialogTitle>Edit Post</DialogTitle>
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
                    <Button onClick={this.closeEditModal} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.editPost} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
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
                        <CustomTableCell align="right">Approved</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.Posts.map(row => {
                        if(row.aproved == 0){
                            return <TableRow className={classes.title} key={row.id}>
                                      <CustomTableCell component="th" scope="row" onClick={e => this.openModal(e, row)}>
                                        {row.title}
                                      </CustomTableCell>
                                      <CustomTableCell align="right" onClick={e => this.openEditPost(e, row)}><Fab color="secondary" style={editButtonStyle}><Icon>edit_icon</Icon></Fab></CustomTableCell>
                                      <CustomTableCell align="right"><Fab color="secondary" style={editButtonStyle}><DeleteIcon onClick={() => this.deletePost(row.id)}/></Fab></CustomTableCell>
                                      <CustomTableCell align="right"><Fab color="secondary" style={editButtonStyle}><Icon>clear</Icon></Fab></CustomTableCell>
                                    </TableRow>
                        }else{
                            return <TableRow className={classes.title} key={row.id}>
                                      <CustomTableCell component="th" scope="row" onClick={e => this.openModal(e, row)}>
                                        {row.title}
                                      </CustomTableCell>
                                      <CustomTableCell align="right" onClick={e => this.openEditPost(e, row)}><Fab color="secondary" style={editButtonStyle}><Icon>edit_icon</Icon></Fab></CustomTableCell>
                                      <CustomTableCell align="right"><Fab color="secondary" style={editButtonStyle}><DeleteIcon onClick={() => this.deletePost(row.id)}/></Fab></CustomTableCell>
                                      <CustomTableCell align="right"><Fab color="secondary" style={editButtonStyle}><Icon>check_outlined</Icon></Fab></CustomTableCell>
                                    </TableRow>
                        }
                      })}
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

export default connect(mapStateToProps, {getPosts, getCategories, getSubCategories,savePost, deletePosts} )(withStyles(styles)(MyPosts));