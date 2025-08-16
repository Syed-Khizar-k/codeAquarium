"use client";
import React, { useState } from "react";
const Payment = () => {
  const [selectPayment, setselectPayment] = useState("stripe");
  return (
    <div className="container payment-container mt-50">
      <form action="#" method="POST">
        <div className="payment-method">
          <h2 className="mb-4">Select Payment Method</h2>
          <div className="payment-options mb-2">
            <span
              className={selectPayment === "stripe" ? "active_payment" : ""}
              onClick={() => setselectPayment("stripe")}
            >
              Stripe Payment
            </span>
            <span
              className={selectPayment === "cash" ? "active_payment" : ""}
              onClick={() => setselectPayment("cash")}
            >
              Cash On Delivery
            </span>
            <span
              className={selectPayment === "bank" ? "active_payment" : ""}
              onClick={() => setselectPayment("bank")}
            >
              Bank Transfer
            </span>
          </div>
        </div>

        {selectPayment === "stripe" && (
          <>
            <div className="payment-details">
              <h2>Payment Details</h2>
              <label htmlFor="cardnumber">Card Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required />
            </div>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
        {selectPayment === "cash" && (
          <>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
        {selectPayment === "bank" && (
          <>
            <div className="payment-details">
              <h2>Payment Details</h2>
              <label htmlFor="cardnumber"> Bank Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required />
            </div>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Payment;
