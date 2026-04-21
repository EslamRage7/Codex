import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Footer from "../Footer";

import "../css/Contact.css";

import contactImage from "../../assets/contact-image.png";
import callImage from "../../assets/call.png";
import map from "../../assets/map.png";

function Contact() {
  const soial = [
    {
      id: 1,
      image: callImage,
      title: "Book a Call",
      description:
        "Schedule a free 15–30 min call to discuss scope, timeline, and budget.",
      show: "Book a Free Call",
      link: "#",
    },
    {
      id: 2,
      image: callImage,
      title: "Email Us",
      description:
        "Prefer email? Send details and we’ll respond within 24 hours.",
      show: "hello@codex.com",
      link: "mailto:info@codex.com",
    },
    {
      id: 3,
      image: callImage,
      title: "WhatsApp",
      description: "Quick questions? Message us directly and we’ll guide you.",
      show: "Chat on WhatsApp",
      link: "https://wa.me/1234567890",
    },
  ];

  return (
    <div className="contact">
      <div className="container">
        <Navbar />
        {/* landing */}
        <div className="row landing align-items-center g-4 landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1 home-content"
            data-aos="fade-right"
            data-aos-delay="50"
          >
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
            data-aos-delay="100"
          >
            <img className="img-fluid" src={contactImage} alt="Codex" />
          </div>
        </div>

        {/* social */}
        <MainTitle title="Get in Touch" />
        <div className="row g-4 mb-5">
          {soial.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="social-card text-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid mb-3"
                />
                <h3 className="text-capitalize text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white mb-3">{item.description}</p>
                <div className="btns-home text-center m-auto">
                  <a
                    href={item.link}
                    className="btn text-center m-auto btn-one px-3"
                  >
                    {item.show}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* what happends */}
        <MainTitle title="What happens next?" />
        <div className="row">
          <div className="col-12">
            <ul className="m-auto text-white">
              <li>We review your message within 24 hours.</li>
              <li>We ask a few clarifying questions (if needed).</li>
              <li>You receive a clear proposal with timeline and cost.</li>
              <li>We start with a kickoff call and a delivery roadmap.</li>
            </ul>
          </div>
        </div>

        {/* map */}
        <div className="map my-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={map} alt="map" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
