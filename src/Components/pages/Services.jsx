import Navbar from "../Navbar";
import MainTitle from "../MainTitle";

import "../css/Services.css";

import servicesImage from "../../assets/services-image.png";
function Services() {
  return (
    <div className="services">
      <div className="container">
        <Navbar />

        {/* landing */}
        <div className="row landing align-items-center g-4 text-lg-start text-md-start text-center landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="50">
            <h1 className="text-capitalize text-white mb-5 mb-lg-3 mb-md-3">
              Our Expertise
            </h1>
            <h3 className="text-capitalize text-white-50 ms-lg-5 ms-md-5 mb-5 mb-lg-0 ">
              Transforming Ideas Into Scalable Digital Realities. From
              enterprise software engineering to award-winning brand identities.
              We provide end-to-end solutions that drive real business growth.
            </h3>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image"
            data-aos="fade-left"
            data-aos-delay="100">
            <img className="img-fluid" src={servicesImage} alt="Codex" />
          </div>
        </div>

        {/* Horizontal Timeline */}
        <MainTitle title="Horizontal Timeline" />
      </div>
    </div>
  );
}

export default Services;
