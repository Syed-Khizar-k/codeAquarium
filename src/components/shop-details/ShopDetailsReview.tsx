"use client";
import React from "react";
import AddReview from "./AddReview";
import GetRatting from "@/hooks/GetRatting";
import Image from "next/image";
import userIcon from "../../../public/assets/img/testimonial/01.png";

import Link from "next/link";
import { ProductType } from "@/interFace/interFace";
import { bestReviewData } from "@/data/best-review-data";
interface propsType {
  product: ProductType;
}

const ShopDetailsReview = ({ product }: propsType) => {
  return (
    <>
      <div className="product_info-faq-area pt-50">
        <nav className="product-details-tab">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              type="button"
              className="nav-item nav-link show"
              id="nav-general-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-general"
              role="tab"
              aria-selected="false"
            >
              Description
            </button>
            <button
              type="button"
              className="nav-item nav-link active"
              id="nav-seller-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-seller"
              role="tab"
              aria-selected="true"
            >
              Reviews
            </button>
          </div>
        </nav>
        <div
          className="tab-content product-details-content"
          id="nav-tabContent"
        >
          <div className="tab-pane fade" id="nav-general" role="tabpanel">
            <div className="tabs-wrapper mt-35">
              <div className="product__details-des">
                <p>
                  {" "}
                  Experience the captivating aroma and delicate texture of
                  Basmati Rice, a treasured grain that hails from the lush
                  fields of India. Renowned for its long, slender grains and
                  distinctive fragrance, our Basmati Rice{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade active show"
            id="nav-seller"
            role="tabpanel"
          >
            <div className={`tabs-wrapper mt-35 mb-50`}>
              {bestReviewData.length ? (
                <div className="scrollbox">
                  {bestReviewData.map((item) => (
                    <div key={item.id} className={`course-review-item mb-30`}>
                      <div className="course-reviews-img">
                        {item?.img ? (
                          <>
                            <Link href="#">
                              <Image
                                src={item?.img}
                                alt="image not found"
                                width={200}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link href="#">
                              <Image
                                width={200}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                                src={userIcon}
                                alt="image not found"
                              />
                            </Link>
                          </>
                        )}
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <Link href="#"> {item.name} </Link>
                        </h5>
                        <div className="course-start-icon">
                          <GetRatting averageRating={item.retting} />
                          <span> {item.date} </span>
                        </div>
                        <p> {item.review} </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p> No Review For This Product</p>
                </>
              )}
            </div>
            <AddReview />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsReview;
