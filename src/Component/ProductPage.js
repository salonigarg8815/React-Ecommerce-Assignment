import React from 'react'
import productPageData from '../constant/productPageData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
    const settings = {
        className: "center",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="container productPage">
                <div className="heading">
                    <h3>Our Products</h3>
                </div>
                <div className="row ">
                    <div className="col ">
                        <h3>Explore Our Products</h3>
                    </div>
                </div>

                <div className="row ">
                    <Slider {...settings}>
                        {
                            productPageData.map((data, index) => (
                                <div className="product-page-card" key={index}>
                                    <div className="product-page-image">
                                        <i class="fa-regular fa-heart"></i>
                                        <img src={data.ProductImage} alt="Products" />
                                    </div>
                                    <div className="pro-content">
                                        <h6>{data.name}</h6>
                                        <label htmlFor="">${data.price} <del>$160</del></label>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="btn pro-btn">
                    <button>View All Products</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
