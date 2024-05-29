import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      {/* Slider-1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end space-x-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className=" border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slider-2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end space-x-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider-3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end space-x-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider-4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end space-x-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider-5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end space-x-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider-6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full space-x-2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl  ">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-white text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="font-semibold border-2 border-customButtonColor bg-customButtonColor text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300 mr-4">
                Discover More
              </button>
              <button className="font-semibold border-2 border-white text-white px-4 py-2 rounded  hover:text-white transition-colors duration-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform space-x-2 -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="border-2 border-customButtonColor text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-customButtonColor hover:text-white transition-colors duration-300"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
