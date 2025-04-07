import React, { useEffect, useState } from "react";

export const Services = () => {
  const services = [
    {
      icon: "home-outline",
      title: "Web Development",
      description:
        "Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge technologies.",
    },
    {
      icon: "browsers-outline",
      title: "UI/UX Design",
      description:
        "Creating visually appealing and user-centric designs that enhance user experiences and engagement.",
    },
    {
      icon: "archive-outline",
      title: "Custom CMS Solutions",
      description:
        "Building reusable and efficient CMS APIs to simplify website management and scalability.",
    },
    {
      icon: "phone-portrait-outline",
      title: "Mobile Applications",
      description:
        "Designing and developing user-friendly mobile applications for iOS and Android, ensuring seamless performance and user satisfaction.",
    },
    {
      icon: "bag-check-outline",
      title: "E-commerce Development",
      description:
        "Creating robust platforms to elevate your online business presence.",
    },
    {
      icon: "swap-horizontal-outline",
      title: "API Integration",
      description:
        "Seamlessly connecting systems to enhance functionality and performance.",
    },
  ];



  return (
    <div className="w-screen h-full m-auto bg-transparent bg-no-repeat bg-cover overflow-hidden pb-5">
      <div
        className={`xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-[-5px] bg-gray-600 rounded-xl overflow-hidden`}

      >
        <div className="absolute inset-0"></div>

        <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">

          <div className="w-fit">
            <h2 className="text-2xl font-bold text-white pb-2">What I Do</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[100%]" />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {services.map((service, index) => (
              <div key={index} className="flex sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    style={{ color: "#4CAF50", fontSize: "3rem" }}
                    name={service.icon}
                  ></ion-icon>
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
