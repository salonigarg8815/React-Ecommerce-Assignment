import React from "react";
import ProductDataContent from "./ProductDataContent";
import image5 from '../images/image 5.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'
import image1 from '../images/image 4.png'
import image0 from '../images/image 5.png'

const ProductDataImage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <img src={image5} alt="img" className="img" />
            <img src={image2} alt="img" className="img" />
            <img src={image3} alt="img" className="img" />
            <img src={image1} alt="img" className="img" />
          </div>
          <div className="col-md-5">
            <img src={image0} alt="img" className="big-img" />
          </div>
          <div className="col-md-5">
            <ProductDataContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataImage;
