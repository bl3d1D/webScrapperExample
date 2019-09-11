import React, { Component } from 'react';
import { getSubCategories } from '../../actions/categoryActions'
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
class SubCategoryComponent extends Component{


    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getSubCategories(this.props.match.params.id);
        console.log(this.props);
    }

    render(){
        console.log(this.props);
        let cat;
        if(typeof this.props.subcategories != 'undefined'){
             cat = this.props.subcategories.map((subcategories) => (
                <Link to={"/notificationSub/" + subcategories.scindex } key={subcategories.scindex}>
                    <Button variant="contained" color="secondary" className="category" id={subcategories.scindex}>
                        <div>
                            <span>{subcategories.title}</span>
                        </div>
                    </Button>
                </Link>
            ));
        }else{
            console.log(cat);
        }
        return(
            <div>
                <h1> Nen- Kategorite </h1>

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
    subcategories : state.CategoryData.subcategories,
    loading : state.CategoryData.SubCategoryLoading,
});

export default connect(mapStateToProps, {getSubCategories})(SubCategoryComponent);