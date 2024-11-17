import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import review1 from '../images/review1.png'
import review2 from '../images/review2.png'
import review3 from '../images/review3.png'




const reviewSliderData = [
  {
    img: review1,
    title: "Tom Cruise",
    para: "Founder & Chairman",
    iconOne: <CiTwitter />,
    iconTwo: <IoLogoInstagram />,
    iconThree: <RiLinkedinLine />,
  },

  {
    img: review2,
    title: "Emma Watson",
    para: "Managing Director",
    iconOne: <CiTwitter />,
    iconTwo: <IoLogoInstagram />,
    iconThree: <RiLinkedinLine />,
  },

  {
    img: review3,
    title: "Will Smith",
    para: "Product Designer",
    iconOne: <CiTwitter />,
    iconTwo: <IoLogoInstagram />,
    iconThree: <RiLinkedinLine />,
  },
];

export default reviewSliderData;
