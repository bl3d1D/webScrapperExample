import React, { Component } from 'react';
import { getCategories } from '../../actions/categoryActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class CategoryComponent extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);

    }
    onClick(id){
        if(id < 3){
            let path = `subcategories/`+id;
            this.props.history.push(path);
        }else{
            let path = `notification/`+id;
            this.props.history.push(path);
        }
    }


    componentDidMount(){
        this.props.getCategories();
    }

    render(){
        let cat;
        if(typeof this.props.categories != 'undefined'){
             cat = this.props.categories.map((category) => (
                <Button variant="contained" color="secondary" className="category" key={category.index} id={category.index} onClick={() => this.onClick(category.index)}>
                    <div>
                        <span>{category.title}</span>
                    </div>
                </Button>
            ));
        }else{
            console.log(cat)
        }
        
        return(
            <div>
                <h1> Kategorite </h1>
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
    categories : state.CategoryData.categories,
    loading : state.CategoryData.CategoryLoading
});


export default connect(mapStateToProps, {getCategories})(withRouter(CategoryComponent));
