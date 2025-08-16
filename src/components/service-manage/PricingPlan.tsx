import Link from "next/link";
import React from "react";
import Image from "next/image";
import { pricingPlanData } from "@/data/pricing-plan-data";
const PricingPlan = () => {
  return (
    <>
      <div
        className="pricing-area pt-100 pb-100"
        style={{ background: "url(assets/img/bg/bg-10.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                <h1>Exclusive Pricing Planning</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingPlanData.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="pricing-wrapper text-center mb-30">
                  <div className="pricing-icon">
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="pricing-top-text">
                    <h3> {item.title} </h3>
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
                      <span className="usd">$</span> {item.price}
                    </h1>
                  </div>
                  <div className="pricing-button">
                    <Link href="/contact">
                      <span className="pricings-button">
                        select plan{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
