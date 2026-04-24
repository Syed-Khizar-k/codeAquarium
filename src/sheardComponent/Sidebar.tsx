import Link from "next/link";
import React from "react";
import useGlobalContext from "../hooks/use-context";
import CartIcon from "../sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "../sheardComponent/elements/icons/wishlist-icon";
import logo from "../../public/assets/img/logo/logo main.svg";
import Image from "next/image";
import MobileMenu from "@/layout/headers/MobileMenu";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => {});

  return (
    <>
      <div className="fix">
        <div className={`side-info ${showSidebar ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="modals-content">
              <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                  <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="offcanvas__close">
                      <button
                        className="offcanvas__close-btn"
                        onClick={() => safeSetShowSidebar(false)}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bd-utilize__buttons mb-25 d-none">
                    <div className="bd-action__item">
                      <div className="bd-action__cart d-none">
                        <div className="bd-action__cart-icon">
                          <span className="bd-cart-mini-btn">
                            <CartIcon />
                          </span>
                          <span className="bd-action__item-number cart-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-action__item d-none">
                      <div className="bd-action__wishlist">
                        <div className="bd-action__wistlist-icon">
                          <span className="bd-cart-mini-btn">
                            <WishlistIcon />
                          </span>
                          <span className="bd-action__item-number wishlist-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offcanvas__search mb-25">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="What are you searching for?"
                      />
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                   

                    <MobileMenu />
                  </nav>
                  <div className="offcanvas__contact mt-30 mb-20">
                    <h4>Contact Info</h4>
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="tel:+923174750491">+92 3174750491</Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href="mailto:abdulrehman@codeaquarium.tech">
                            <span>abdulrehman@codeaquarium.tech</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => safeSetShowSidebar(false)}
        className={`offcanvas-overlay ${showSidebar ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
