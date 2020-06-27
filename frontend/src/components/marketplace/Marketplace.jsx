import React, { Component } from 'react'
import ProductList from './ProductList'

export default class Marketplace extends Component {
    render() {
        return (
            <div className="marketplace-section">
                <ProductList />
            </div>
        )
    }
}
