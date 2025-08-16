import React from "react";
import thumbOne from "../../../public/assets/img/carrer/01.png";
import thumbTwo from "../../../public/assets/img/carrer/02.png";
import thumbThree from "../../../public/assets/img/carrer/03.png";
import thumbFour from "../../../public/assets/img/carrer/04.png";
import thumbFive from "../../../public/assets/img/carrer/05.png";
import thumbSix from "../../../public/assets/img/carrer/06.png";
import thumbSeven from "../../../public/assets/img/carrer/07.png";
import thumbEight from "../../../public/assets/img/carrer/08.png";
import Link from "next/link";
import Image from "next/image";
const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "It Solutions",
      img: thumbOne,
    },
    {
      id: 2,
      title: "It Solutions",
      img: thumbTwo,
    },
    {
      id: 3,
      title: "Product Design",
      img: thumbThree,
    },
    {
      id: 4,
      title: "Server Security",
      img: thumbFour,
    },
    {
      id: 5,
      title: "It Management",
      img: thumbFive,
    },
    {
      id: 6,
      title: "UX/UI Strategy",
      img: thumbSix,
    },
    {
      id: 7,
      title: "IT Marketing",
      img: thumbSeven,
    },
    {
      id: 8,
      title: "Bank & Finance",
      img: thumbEight,
    },
  ];

  return (
    <>
      <section className="career-cat-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>Job category</span>
                <span className="border-right-1"></span>
                <h1>Our Latest Job Category</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {categoriesData.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4">
                <Link href="/service-1">
                  <div className="carrer-cat text-center mb-30">
                    <Image style={{ width: "auto", height: "auto" }} src={item.img} alt="" />
                    <h3> {item.title} </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
