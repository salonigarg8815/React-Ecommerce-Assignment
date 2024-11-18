import Footer from "../Component/Footer";
import Header from "../Component/Header";
import BreadcrumOne from "./BreadcrumOne";
import ProductDataImage from "./ProductDataImage";

const ProductData = () => {
  return (
    <>
      <Header />
      <div className="container my-5">

        <div className="row">
          <div className="col">

            <BreadcrumOne />
            <ProductDataImage />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default ProductData;
