import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Footer from "../Footer";

import "../css/Contact.css";

import contactImage from "../../assets/contact-image.png";

function Contact() {
  return (
    <div className="contact">
      <div className="container text-white py-5">
        <Navbar />
        <div className="row landing align-items-center g-4 landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1 home-content"
            data-aos="fade-right"
            data-aos-delay="50">
            <h1 className="text-capitalize text-white mb-4 ms-lg-5">
              Let’s Talk About Your Next Project.
            </h1>
            <p className="text-capitalize text-white-50 ms-lg-5">
              Tell us what you’re building we’ll reply within 24 hours with
              clear next steps.
            </p>
            <div className="btns-home ms-lg-5">
              <a href="#" className="btn btn-one px-3">
                Book a Free Call
              </a>

              <a href="#" className="btn btn-two px-3">
                Send a Message
              </a>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100">
            <img className="img-fluid" src={contactImage} alt="Codex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
