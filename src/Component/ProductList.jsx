import React, { Component } from 'react'
import Product from './Product';
import Title from "./Title";
import {ProductConsumer} from "../Context";

class ProductList extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" />
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.products.map( product => { 
                                        return <Product 
                                                    key={product.id} 
                                                    product={product} 
                                                    // handleDetail={value.handleDetail}
                                                    // addToCart={value.addToCart}
                                                />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductList
