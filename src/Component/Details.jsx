import React, { Component } from 'react'
import {ProductConsumer} from "../Context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button"

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value)=>{
                const {id, title, img, price, company, info, inCart} = value.detailProduct;
                return(
                    <div className="container py-5">
                        {/* Title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* End Title */}
                        {/* Product Info */}
                        <div className="row">
                            {/* Product Img Start */}
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} alt="Product Pic" className="img-fluid"/>
                            </div>
                            {/* Product Img End */}
                            {/* Product Text Start */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made By <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>Price: {price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Some info about product:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                {/* Product Text End */}
                                {/* Product Button Start */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                        // cart
                                        disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }}
                                    >
                                        {inCart ? "In Cart" : "Add to Cart"}
                                    </ButtonContainer>

                                </div>
                                {/* Product Button End */}
                            </div>
                        </div>

                    </div>
                )
            }}
            </ProductConsumer>
        )
    }
}

export default Details
