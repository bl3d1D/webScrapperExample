import React, { Component } from 'react';
import { getDetails } from '../../actions/categoryActions'
import { connect } from 'react-redux';
import { Router,Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import Button from '@material-ui/core/Button';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Details extends Component{


    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        console.log('Clicked');
    }

    componentWillMount(){
        this.props.getDetails(this.props.match.params.id);
    }

    render(){
        let cat;
        let button;
        console.log(this.props.Details);
        if(typeof this.props.Details != 'undefined'){
             cat = this.props.Details;
        }else{
            console.log(cat);
        }
        console.log(this.props.loggedin);
        if(this.props.loggedin){
            button = <Button variant="contained" className="saveButton" onClick={() => this.onClick()}>Save</Button>;
        }
        return(
            <div>        
                <div id="details" dangerouslySetInnerHTML={ {__html: cat }} />
                {button}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    Details : state.CategoryData.Details,
    loading : state.CategoryData.DetailsLoading,
    loggedin : state.Userdata.authenticated
});

export default connect(mapStateToProps, {getDetails})(Details);