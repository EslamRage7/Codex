import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Numbers from "../Numbers";

import "../css/Home.css";
import homeImage from "../../assets/home-image.png";
import devImage from "../../assets/devImage.png";
import mac from "../../assets/mac.png";
import Footer from "../Footer";

function Home() {
  const services = [
    {
      id: 1,
      image: devImage,
      title: "web dev",
      description: "Lorem ipsum dolor sit amet, cre et dolore magna aliqua.",
    },
    {
      id: 2,
      image: devImage,
      title: "mobile dev",
      description: "Lorem ipsum dolor sit amet, cre et dolore magna aliqua.",
    },
    {
      id: 3,
      image: devImage,
      title: "Advertisement",
      description: "Lorem ipsum dolor sit amet, cre et dolore magna aliqua.",
    },

    {
      id: 4,
      image: devImage,
      title: "Graphic design",
      description: "Lorem ipsum dolor sit amet, cre et dolore magna aliqua.",
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: "Agile & Fast Delivery",
      description:
        "We use agile methodologies to ensure your project is delivered on time without compromising quality.",
    },
    {
      id: 2,
      title: "Modern Tech Stack",
      description:
        "Built on the latest frameworks to guarantee security, speed, and future-proofing.",
    },
    {
      id: 3,
      title: "Data-Driven Design",
      description:
        "Every pixel we design is backed by user research and conversion optimization strategies.",
    },
    {
      id: 4,
      title: "Dedicated Support",
      description:
        "Our relationship doesn't end at launch. We provide ongoing maintenance and technical support.",
    },
  ];

  return (
    <div className="home">
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
              building premium softwaare & design experiences .
            </h1>
            <p className="text-capitalize text-white-50 ms-lg-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              aliqua.
            </p>
            <div className="btns-home ms-lg-5">
              <a href="#" className="btn btn-one px-3">
                get started
              </a>

              <a href="#" className="btn btn-two px-3">
                read more
              </a>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img className="img-fluid" src={homeImage} alt="Codex" />
          </div>
        </div>

        {/* services */}
        <MainTitle title="our services" />
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-12">
              <div
                className="service-card text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 90}
              >
                <img src={service.image} alt={service.title} />
                <h3 className="text-white text-capitalize mt-4">
                  {service.title}
                </h3>
                <p className="text-white-50 text-capitalize">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* numbers */}
        <MainTitle title="our numbers" />
        <Numbers />

        {/* Why Choose Us*/}
        <MainTitle title="why choose us" />
        <div className="row g-4 mb-5">
          {whyChooseUs.map((reason, index) => (
            <div key={reason.id} className="col-lg-6 col-md-6 col-12">
              <div
                className="reason-card text-start"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <li className="text-capitalize mb-3">{reason.title}</li>
                <p className="text-white-50 text-capitalize text-start">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise E-Commerce Solution */}
        <div className="row align-items-center g-4 Enterprise">
          <div
            className="col-12 col-lg-6 home-image Enterprise__image"
            data-aos="fade-right"
          >
            <img className="img-fluid" src={mac} alt="Codex" />
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <h1 className="text-capitalize text-white mb-4">
              Enterprise E-Commerce Solution
            </h1>
            <p className="text-capitalize text-white-50">
              A complete digital transformation for a leading retail brand. We
              developed a robust e-commerce platform with a streamlined checkout
              process, resulting in a 45% increase in online sales and a
              superior user experience
            </p>

            <a href="#" className="btn btn-Enterprise px-3">
              View Case Study {"->"}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
