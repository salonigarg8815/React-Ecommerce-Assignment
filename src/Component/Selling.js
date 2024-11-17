import React from 'react'
import SellingData from '../constant/sellingData'
import product from '../images/product.png'

const Selling = () => {
    return (
        <div>
            <div className="container selling-section my-5">
                <div className="heading">
                    <h3>Today’s</h3>
                </div>
                <div className="row selling-title">
                    <div className="col d-flex justify-content-between">
                        <h3>Best Selling Products</h3>
                        <button> View All</button>
                    </div>
                </div>

                <div className="row selling-card my-4">
                    {
                        SellingData.map((data, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card border-0">
                                    <i class="fa-regular fa-heart m-2"></i>
                                    <img src={data.img} alt="coat" />
                                </div>
                                <div className="card-body">
                                    <h6>{data.title}</h6>
                                    <label htmlFor="">{data.price}  <del>$160</del></label>
                                    <div className="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <span> {data.review}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row selling-product">
                    <div className="col  mt-5">
                        <img src={product} alt="product" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selling
