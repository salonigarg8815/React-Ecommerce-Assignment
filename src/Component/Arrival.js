import React from 'react'
import arrival1 from '../images/arrival1.png'
import arriva2 from '../images/arrival2.png'
import arrival3 from '../images/Frame 737.png'

const Arrival = () => {
    return (
        <div className="container arrival-section">
            <div className="heading">
                <h3>Our Products</h3>
            </div>
            <div className="row">
                <div className="col">
                    <h3>New Arrival</h3>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-6 arrival-left-img">
                    <img src={arrival1} alt="" />
                </div>
                <div className="col-md-6 arrival-right-img ">
                    <img src={arriva2} alt="" className='my-sm-2' />
                    <img src={arrival3} alt="" className='mt-3' />
                </div>
            </div>
        </div>
    )
}

export default Arrival
