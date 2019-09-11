import React, { Component } from 'react';
import { getNotifications } from '../../actions/categoryActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Notifications extends Component{


    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log(this.props);
        this.props.getNotifications(this.props.match.params.id);
    }

    render(){
        let cat;
        if(typeof this.props.Notifications != 'undefined'){
             cat = this.props.Notifications.map((Notifications) => (
                <Link to={"/details/" + Notifications.index } key={Notifications.index}>
                    <Button variant="contained" color="secondary" className="category" id={Notifications.index}>
                        <div>
                            <span>{Notifications.title}</span>
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
    Notifications : state.CategoryData.Notifications,
    loading : state.CategoryData.NotificationLoading,
});

export default connect(mapStateToProps, {getNotifications})(Notifications);