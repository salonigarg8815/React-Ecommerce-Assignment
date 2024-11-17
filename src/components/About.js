import AboutBanner from "./AboutBanner";
import Card from "./Card";
import Facility from "./Facility";
import Review from "./Review";
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      <Card />
      <Review />
      <Facility />
      <Footer />
    </div>
  );
};

export default About;
