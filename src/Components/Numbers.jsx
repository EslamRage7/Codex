import numImage from "../assets/numbers.png";

const numbers = [
  {
    id: 1,
    image: numImage,
    title: "Projects Delivered",
  },
  {
    id: 2,
    image: numImage,
    title: "Happy Clients",
  },
  {
    id: 3,
    image: numImage,
    title: "Client Retention",
  },

  {
    id: 4,
    image: numImage,
    title: "Tech Experts",
  },
];

function Numbers() {
  return (
    <div className="row g-4">
      {numbers.map((number, index) => (
        <div key={number.id} className="col-lg-3 col-md-6 col-sm-6 col-6">
          <div
            className="number-card text-center"
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <img src={number.image} alt={number.title} />
            <h3 className="text-white text-capitalize mb-3">{number.title}</h3>
            <p className="text-capitalize">+5</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Numbers;
