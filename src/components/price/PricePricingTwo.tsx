import { pricingPlanData } from "@/data/pricing-plan-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PricePricingTwo = () => {
  const imgOne = pricingPlanData[0].img;
  const imgTwo = pricingPlanData[1].img;
  const imgThree = pricingPlanData[2].img;
  return (
    <>
      <div
        className="pricing-area pt-120 pb-100"
        style={{ background: "url(assets/img/bg/bg-10.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our pricing</span>
                <span className="border-right-1"></span>
                <h1>Exclusive Pricing Planning</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="pricing-wrapper text-center mb-30">
                <div className="pricing-icon">
                  <Image
                    style={{ width: "auto", height: "auto" }}
                    src={imgOne}
                    alt="pricing-data"
                  />
                </div>
                <div className="pricing-top-text">
                  <h3>basic plan</h3>
                </div>
                <div className="pricing-menu">
                  <ul>
                    <li>IT Solutions</li>
                    <li>Software Development</li>
                    <li>UX/UI Strategy</li>
                    <li>IT Consulting</li>
                    <li>Product Design</li>
                  </ul>
                </div>
                <div className="price-count">
                  <h1>
                    <span className="usd">$</span>15.99
                  </h1>
                </div>
                <div className="pricing-button">
                  <Link href="#">
                    {" "}
                    <span className="pricings-button">
                      select plan{" "}
                      <i className="fas fa-long-arrow-alt-right"> </i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="pricing-wrapper active text-center mb-30">
                <div className="pricing-tag">
                  <span>popular plan</span>
                </div>
                <div className="pricing-icon">
                  <Image
                    style={{ width: "auto", height: "auto" }}
                    src={imgTwo}
                    alt="pricing-data"
                  />
                </div>
                <div className="pricing-top-text">
                  <h3>standard plan</h3>
                </div>
                <div className="pricing-menu">
                  <ul>
                    <li>IT Solutions</li>
                    <li>Software Development</li>
                    <li>UX/UI Strategy</li>
                    <li>IT Consulting</li>
                    <li>Product Design</li>
                  </ul>
                </div>
                <div className="price-count">
                  <h1>
                    <span className="usd">$</span>49.99
                  </h1>
                </div>
                <div className="pricing-button active">
                  <Link href="#">
                    {" "}
                    <span className="pricings-button">
                      select plan{" "}
                      <i className="fas fa-long-arrow-alt-right"> </i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="pricing-wrapper text-center mb-30">
                <div className="pricing-icon">
                  <Image
                    style={{ width: "auto", height: "auto" }}
                    src={imgThree}
                    alt="pricing-data"
                  />
                </div>
                <div className="pricing-top-text">
                  <h3>premium plan</h3>
                </div>
                <div className="pricing-menu">
                  <ul>
                    <li>IT Solutions</li>
                    <li>Software Development</li>
                    <li>UX/UI Strategy</li>
                    <li>IT Consulting</li>
                    <li>Product Design</li>
                  </ul>
                </div>
                <div className="price-count">
                  <h1>
                    <span className="usd">$</span>89.99
                  </h1>
                </div>
                <div className="pricing-button">
                  <Link href="#">
                    {" "}
                    <span className="pricings-button">
                      select plan{" "}
                      <i className="fas fa-long-arrow-alt-right"> </i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricePricingTwo;
