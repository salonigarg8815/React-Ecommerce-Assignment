import React from 'react'
import data from '../constant/carouselData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
    }

    return (
        <div className='container'>
            <div className=" row ">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div className="col-md-2 col-sm-12 mt-4 product-card" key={index}>
                            <div className="card-box">
                                <div className="card-btn mt-2">
                                    <button>{d.discount}</button>
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                                <img src={d.img} alt="gamePad" />
                            </div>
                            <div className="card-body-box">
                                <h6> {d.title} </h6>
                                <label htmlFor="">{d.price}  <del>$160</del></label>

                                <div className="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <span> {d.review}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel
