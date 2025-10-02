import { servicesData } from "@/data/services-data";
import Image from "next/image";
import python_icon from '../../assets/icons/python.svg'
import django_icon from '../../assets/icons/django.svg'
import flask_icon from '../../assets/icons/Flask.svg'
import Link from "next/link";
import { title } from "process";
import React from "react";

const services=[
      {
        title:"Generative AI",
        icon:python_icon
    },
    {
        title:"Agentic AI",
        icon:django_icon,
    },
    {
        title:"Python",
        img:python_icon,
    },
    {
        title:"Django",
        icon:django_icon,
    },
    {
        title:"Flask",
        icon:flask_icon,
    },
    {
        title:"JavaScript",
        img:"",
    },
    {
        title:"Azure",
        img:"",
    },
    {
        title:"Web3 js",
        img:"",
    },
    {
        title:"Postgresql",
        img:"",
    },
    {
        title:"MongoDB",
        img:"",
    },
    {
        title:"React",
        img:"",
    },
    {
        title:"Twilio",
        img:"",
    },
    {
        title:"TensorFlow",
        img:"",
    },
    {
        title:"Artificial Intelligence",
        img:"",
    },

]

const Technologies = () => {
  return (
    <div className="container">
    <div className="border row flex-col d-flex justify-content-start gap-[20px]">

    <div className="col-12">
      <h1 className="" >Our KeyDevelopment Technologies</h1>
    </div>
     <div className="row col-12 border">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 d-flex mb-30 bg-black w-[101px] rounded-[10%] h-[98px]"
              >
                <div className="row d-flex flex-col justify-content-between gap-[20px] align-items-center">
                  <img className="col-12" src={item.icon} alt={item.title} />
                  <h2 className="col-12">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
    </div>
    </div>
  );
};

export default Technologies;
