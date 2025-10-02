import React from "react";
import '../../style/index.scss'
import Image from "next/image";
import python_icon from '../../assets/icons/python.svg'
import django_icon from '../../assets/icons/django.svg'
import flask_icon from '../../assets/icons/Flask.svg'
import tensorflow_icon from '../../assets/icons/tensorflow_icon.svg'
import javascript_icon from '../../assets/icons/javascript_icon.svg'
import tailwind_icon from '../../assets/icons/tailwind_icon.svg'
import azure_icon from '../../assets/icons/azure_icon.svg'
import twilio_icon from '../../assets/icons/twilio_icon.svg'
import react_icon from '../../assets/icons/react_icon.svg'
import postgresql_icon from '../../assets/icons/postgresql_icon.svg'
import mongodb_icon from '../../assets/icons/mongodb_icon.svg'
import ai_icon from '../../assets/icons/artificial_intelligence_icon.webp'
import kotlin_icon from '../../assets/icons/kotlin_icon.svg'
import web3js_icon from '../../assets/icons/web3js_icon.svg'
import gpt_icon from '../../assets/icons/genAI_icon.png'

const services = [
  { title: "Python", icon: python_icon },
  { title: "Django", icon: django_icon },
  { title: "Flask", icon: flask_icon },
  { title: "TensorFlow", icon: tensorflow_icon},
  { title: "JavaScript", icon: javascript_icon },
  { title: "Tailwind CSS", icon: tailwind_icon},
  { title: "React", icon: react_icon },
  { title: "MongoDB", icon:mongodb_icon },
  { title: "Postgresql", icon: postgresql_icon },
  { title: "Artificial Intelligence", icon: ai_icon},
  { title: "Generative AI", icon: gpt_icon},
  { title: "Web3 js", icon: web3js_icon },
  { title: "Kotlin", icon:kotlin_icon},
  { title: "Twilio", icon: twilio_icon },
  { title: "Azure", icon: azure_icon},
];

const Technologies = () => {
  return (
    <div className="container text-center py-5  service-div">
      <h1 className="mb-5 fw-bold">Our Key Development Technologies</h1>

      <div className="row g-4  align-items-center justify-content-center"  style={{ display: "flex", flexWrap: "wrap" }}>
        {services.map((item, index) => (
            <div key={index} className="d-flex flex-column align-items-center justify-content-center col-6 col-md-4 col-lg-2 mb-2" style={{ minWidth: "225px" }}>
              <Image
                src={item.icon}
                alt={item.title}
                className="img-fluid mb-3  tech-icon bg-dark p-3 rounded h-100 shadow-sm "
                width={100} 
              height={100}
              />
              <h5 className="fw-bold  w-100 ">{item.title}</h5>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Technologies;
