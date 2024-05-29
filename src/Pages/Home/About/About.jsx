import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
      <div className="hero my-16 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative ">
            <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-6 top-1/2 rounded-lg shadow-2xl  border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-xl  font-bold text-customButtonColor">
              About Us
            </h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              <br /> <br />
              slightly believable. the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even slightly believable.
            </p>
           
            <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;