import React from 'react';

const ServiceCard = (service) => {
    console.log(service.service);
    const { img, price, title } = service.service;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="flex items-center justify-around  text-center my-2">
          <div className=''>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-customButtonColor text-xl">$ {price}</p>
          </div>
          <div className="card-actions">
            <button className="  text-customButtonColor w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors duration-300">
              
              ❯
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;