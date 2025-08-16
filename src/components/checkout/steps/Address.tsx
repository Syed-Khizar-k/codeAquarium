import { countryes } from "@/data/nice-select-data";
import NiceSelectTwo from "@/utils/NiceSelectTwo";
import React from "react";

const Address = () => {
  const selectHandler = () => {};
  return (
    <>
      <section className="checkout-area pt-70">
        <div className="container container-small">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="country-select">
                        <label>
                          Country <span className="required text-danger">*</span>
                        </label>
                        <NiceSelectTwo
                          options={countryes}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name="lan-select"
                          className=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="Street address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="Town / City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required text-danger">*</span>
                        </label>
                        <input type="email" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required text-danger">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="order-notes">
                        <div className="checkout-form-list">
                          <label>Order Notes</label>
                          <textarea
                            id="checkout-mess"
                            cols={30}
                            rows={10}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Address;
