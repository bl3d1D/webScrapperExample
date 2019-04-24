import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import React, { Component } from 'react';
import { getNotificationsSub } from '../../actions/categoryActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';;


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class NotificationsFromSub extends Component{


    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log(this.props);
        this.props.getNotificationsSub(this.props.match.params.id);
    }

    render(){
        let cat;
        if(typeof this.props.NotificationsSub != 'undefined'){
             cat = this.props.NotificationsSub.map((NotificationsSub) => (
                <Link to={"/subdetails/" + NotificationsSub.index } key={NotificationsSub.index}>
                    <Button variant="contained" color="secondary" className="category" id={NotificationsSub.index}>
                        <div>
                            <span>{NotificationsSub.title}</span>
                        </div>
                    </Button>
                </Link>
            ));
        }else{
            console.log(cat);
        }
        return(
            <div>
                <h1> Njoftimet </h1>
                    <ClipLoader
                      css= { override }
                      sizeUnit={"px"}
                      size={300}
                      color={'#123abc'}
                      loading={this.props.loading}
                    />
                {cat}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    NotificationsSub : state.CategoryData.NotificationsSub,
    loading : state.CategoryData.NotificationsSubLoading,
});

export default connect(mapStateToProps, {getNotificationsSub})(NotificationsFromSub);