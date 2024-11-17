import React from 'react'
import arrival1 from '../images/arrival1.png'
import arriva2 from '../images/arrival2.png'
import arrival3 from '../images/Frame 737.png'

const Arrival = () => {
    return (
        <div className="container">
            <div className="heading">
                <h3>Our Products</h3>
            </div>
            <div className="row">
                <div className="col">
                    <h3>New Arrival</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img src={arrival1} alt="" />
                </div>
                <div className="col-md-6">
                    <img src={arriva2} alt="" />
                    <img src={arrival3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Arrival
