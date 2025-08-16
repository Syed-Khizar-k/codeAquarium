"use client";
import GetRatting from "@/hooks/GetRatting";
import React from "react";
const AddReview = () => {
  return (
    <>
      <div className="product__details-comment ">
        <>
          <div className="comment-title mb-20">
            <h3>Add review & rating</h3>
          </div>
          <div className="comment-rating mb-20">
            <span>give ratings</span>
            <ul>
              <li>
                <span>
                  <GetRatting averageRating={0} />
                </span>
              </li>
            </ul>
          </div>
          <div className="comment-input-box mb-20">
            <form action="#">
              <div className="row">
                <div className="col-xxl-12">
                  <textarea
                    placeholder="Your review"
                    className="comment-input comment-textarea mb-20"
                  />
                </div>

                <div className="col-xxl-12">
                  <div className="comment-submit">
                    <button type="submit" className="bd-fill__btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      </div>
    </>
  );
};

export default AddReview;
