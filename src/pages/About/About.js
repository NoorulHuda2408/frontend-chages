import Footer from "../../components/Footer/Footer";
import NavbarCustom from "../../components/Navbar";
import "./about.css"
export default function About() {
  return (
    <>
    <NavbarCustom/>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg"
          />
          <div className="allText aboveText">
            <p className="text-blk headingText">Our Mission</p>
            <p className="text-blk subHeadingText">
            At Tuition Recommender, our mission is to empower students.
            </p>
            <p className="text-blk description">
            We believe in fostering a supportive learning environment and aim to make education more accessible, engaging, and tailored to individual needs. Our commitment is to bridge the gap between students and tutors, creating a seamless platform for knowledge exchange.
            </p>
            {/* <button className="explore">Explore</button> */}
          </div>
        </div>
        <div className="responsive-container-block Container bottomContainer">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"
          />
          <div className="allText bottomText">
            <p className="text-blk headingText">Our Vision</p>
            <p className="text-blk subHeadingText">
            Our vision is to democratize education with accessible, high-quality learning
            </p>
            <p className="text-blk description">
              {"Our user-friendly platform connects students with skilled tutors, inspiring and guiding them on their educational journey. With innovative solutions, we aim to be the go-to platform for academic support, empowering students and enabling tutors to make a positive impact on the next generation."
                
              
              }


            </p>
            {/* <button className="explore">Explore</button> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
