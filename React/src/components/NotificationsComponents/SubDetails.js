import React, { Component } from 'react';
import { getSubDetails } from '../../actions/categoryActions';
import { saveNotification } from '../../actions/userActions';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SubDetails extends Component{


    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        let data = {
            notification_id: this.props.match.params.id,
            details: this.props.SubDetails[0]
        }
        this.props.saveNotification(data);
    }

    componentWillMount(){
        this.props.getSubDetails(this.props.match.params.id);
    }

    render(){
        let cat;
        let button;
        if(typeof this.props.SubDetails != 'undefined'){
             cat = this.props.SubDetails;
        }else{
            console.log(cat);
        }

        if(this.props.loggedin){
            button = <Button variant="contained" className="saveButton" onClick={() => this.onClick()}>Save</Button>;
        }
        return(
            <div>
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
                    <Dialog
                        open={this.props.success}
                        TransitionComponent={Transition}
                        keepMounted
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        >
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Success"}
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
                <div id="details" dangerouslySetInnerHTML={ {__html: cat }} />
                {button}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    SubDetails : state.CategoryData.SubDetails,
    loading : state.CategoryData.SubDetailsLoading,
    loggedin : state.Userdata.authenticated,
    success: state.Userdata.success,
    error: state.Userdata.error,
    message: state.Userdata.message,
});

export default connect(mapStateToProps, {getSubDetails, saveNotification})(SubDetails);