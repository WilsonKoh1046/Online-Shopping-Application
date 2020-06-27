import React, { Component } from 'react'
import Product from './Product';
import '../../styles/marketplace/productList.css';
import Pagination from 'react-js-pagination';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            activePage: 1,
            itemPerPage: 6
        }
        this.getAllProducts = this.getAllProducts.bind(this);
    }
    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts() {
        fetch("/api/product/allProducts")
        .then(response => response.json())
        .then(data => {
            this.setState({
                products: data
            })
        })
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    render() {
        let end = this.state.itemPerPage * this.state.activePage;
        let start = end - (this.state.itemPerPage - 1);
        let allProducts = [];
        if (end > this.state.products.length) {
            end = (end- this.state.itemPerPage) + (this.state.itemPerPage - (end - this.state.products.length));
        }
        for (let i = start - 1; i < end; i++) {
            allProducts.push(this.state.products[i]);
        }
        return (
            <div>
                <h1>Our Products:</h1>
                <div className="products-section">
                    {allProducts.map((product) => {
                        return <Product detail={product} />
                    })}
                </div>
                {allProducts.length > 0 && 
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemPerPage}
                        totalItemsCount={this.state.products.length}
                        pageRangeDisplayed={2}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={this.handlePageChange.bind(this)}
                    />
                }
            </div>
        )
    }
}
