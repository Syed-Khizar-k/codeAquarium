import Email from "@/svg/email";
import Link from "next/link";
import React from "react";

const ForgotForm = () => {
  return (
    <div className="login__form">
      <form>
        <div className="login__input-wrapper">
          <div className="login__input-item">
            <div className="login__input">
              <input type="email" placeholder="Enter Your Email" />
              <span>
                <Email />
              </span>
            </div>
          </div>
        </div>

        <div className="login__btn text-center">
          <button className="btn">
            <span className="btn-text">
              Forgotten Password <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </button>
        </div>
      </form>
      <div className="login__register-now">
        <p>
          Remember your password? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotForm;
