import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Numbers from "../Numbers";
import Footer from "../Footer";

import "../css/Home.css";

import homeImage from "../../assets/home-image.png";
import devImage from "../../assets/devImage.png";
import mac from "../../assets/mac.png";
import { useLanguage } from "../../context/LanguageContext";

function Home() {
  const { t } = useLanguage();
  const services = t.home.services.map((service) => ({
    ...service,
    image: devImage,
  }));

  return (
    <div className="home">
      <div className="container">
        <Navbar />
        {/* landing */}
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 landing align-items-center g-4 landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1 home-content"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h1 className="text-capitalize text-white mb-4">
              {t.home.landing.title}
            </h1>
            <p className="text-capitalize text-white-50">
              {t.home.landing.description}
            </p>
            <div className="btns-home">
              <a href="#" className="btn btn-one px-3">
                {t.home.landing.primaryButton}
              </a>

              <a href="#" className="btn btn-two px-3">
                {t.home.landing.secondaryButton}
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
        <MainTitle title={t.home.servicesTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-12">
              <div
                className="service-card-wrapper"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <div className="service-card text-center">
                  <img src={service.image} alt={service.title} />
                  <h3 className="text-white text-capitalize mt-4">
                    {service.title}
                  </h3>
                  <p className="text-white-50 text-capitalize">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* numbers */}
        <MainTitle title={t.home.numbersTitle} />
        <Numbers />

        {/* Why Choose Us*/}
        <MainTitle title={t.home.whyChooseUsTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-5">
          {t.home.whyChooseUs.map((reason, index) => (
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
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 align-items-center g-4 Enterprise">
          <div
            className="col-12 col-lg-6 home-image Enterprise__image"
            data-aos="fade-right"
          >
            <img className="img-fluid" src={mac} alt="Codex" />
          </div>
          <div className="col-12 col-lg-6 text-lg-start" data-aos="fade-left">
            <h1 className="text-capitalize text-white mb-4">
              {t.home.caseStudy.title}
            </h1>
            <p className="text-capitalize text-white-50">
              {t.home.caseStudy.description}
            </p>

            <a href="#" className="btn btn-Enterprise px-3">
              {t.home.caseStudy.button}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
