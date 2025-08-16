"use client";
import Pagination from "@/utils/Pagination";
import React from "react";
import ShopContent from "./ShopContent";
import NiceSelectTwo from "@/utils/NiceSelectTwo";
import { sortbyData } from "@/data/nice-select-data";

const ShopSection = () => {
  const selectHandler = () => {};
  return (
    <>
      <section className="shop-banner-area pt-120 pb-120">
        <div className="container">
          <div className="row mt-20 d-flex justify-content-between flex-wrap">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="product-showing mb-40">
                <p>Showing 1–22 of 32 results</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-6">
              <div className="sortby_content">
                <NiceSelectTwo
                  options={sortbyData}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="pro-filter"
                  className="pro-filter"
                />
              </div>
            </div>
          </div>
          <ShopContent />
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default ShopSection;
