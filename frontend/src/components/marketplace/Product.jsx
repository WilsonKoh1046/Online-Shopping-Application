import React, { Component } from 'react'
import '../../styles/marketplace/product.css';

export default class Product extends Component {
    render() {
        return (
            <div class="product-card">
                <h2 className="product-name">{this.props.detail.productName}</h2>
                <p className="product-price">${this.props.detail.productPrice}</p>
                <p className="product-description">{this.props.detail.productDescription}</p>
            </div>
        )
    }
}
