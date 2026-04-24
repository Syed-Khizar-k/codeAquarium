"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import logoImg from "../../../public/assets/img/logo/logo main.svg"
import Image from "next/image";
import TopHeader from "./TopHeader";
import { usePathname } from "next/navigation";
import navMenuData from "@/data/headernav/nav-menus";
import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
import useGlobalContext from "@/hooks/use-context";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import SidebarCart from "./SidebarCart";
import SidebarWishlist from "./SidebarWishlist";
import MobileMenu from "./MobileMenu";
const HeaderOne = () => {
  const pathName = usePathname();
  const { setOpenCart, setOpenWishlist, toggleSideMenu, sideMenuOpen } =
    useGlobalContext();
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();

  useEffect(() => {
    const header = document.querySelector(".main-menu-area") as HTMLElement | null;
    if (!header) return;
  
    const headerHeight = header.offsetHeight; 
  
    const placeholder = document.createElement("div");
    placeholder.style.height = `${headerHeight}px`;
    placeholder.style.display = "none";
    header.parentNode?.insertBefore(placeholder, header);
  
    const sticky = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 40) {
        header.classList.add("sticky");
        placeholder.style.display = "block";
      } else {
        header.classList.remove("sticky");
        placeholder.style.display = "none";
      }
    };
  
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
      placeholder.remove();
    };
  }, []);
  




  
  // useEffect(() => {
  //   window.addEventListener("scroll", sticky);
  //   return () => {
  //     window.removeEventListener("scroll", sticky);
  //   };
  // });

  // const sticky = () => {
  //   const header = document.querySelector(".main-menu-area");
  //   const scrollTop = window.scrollY;
  //   if (header) {
  //     scrollTop >= 40
  //       ? header.classList.add("sticky")
  //       : header.classList.remove("sticky");
  //   }
  // };
  return (
    <>
      <header id="header-wrap">
        {pathName !== "/home-2" && <TopHeader />}
        <div id="sticky-header" className="main-menu-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logoImg}
                      width={134}
                      height={0}
                      alt="flag"
                    />
                  </Link>
                </div>
              </div>
              <div
                id="right-header"
                className="col-xl-9 col-lg-9 col-md-6 col-4 d-flex justify-content-end"
              >
                {/* <div className="header-button f-right d-none d-xl-block">
                  <Link className="btn" href="/goals">
                    <span className="btn-text">
                      Consultancy{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div> */}
                 <div className="header-button f-right d-lg-block">
                  <div className="bd-header__right d-flex align-items-center justify-content-end">
                    <div className="bd-action__cart-list">
                      <div className="bd-action__item d-none">
                         <div className="bd-action__cart">
                          <div
                            className="bd-action__cart-icon"
                            onClick={() => setOpenCart(true)}
                          >
                            <span className="bd-cart-mini-btn">
                              <CartIcon />
                            </span>
                            <span className="bd-action__item-number cart-count">
                              {productQuantity}
                            </span>
                          </div>
                        </div> 
                      </div>
                      <div className="bd-action__item d-none">
                        <div className="bd-action__wishlist">
                          <div
                            className="bd-action__wistlist-icon"
                            onClick={() => setOpenWishlist(true)}
                          >
                            <span className="bd-cart-mini-btn">
                              <WishlistIcon />
                            </span>
                            <span className="bd-action__item-number wishlist-count">
                              {wishlistQuantity}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-inline-block d-xl-none  text-right">
                        <div className="menu-bar">
                          <button className="bars" onClick={toggleSideMenu}>
                            <i className="fas fa-bars"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 

                <div className="main-menu text-right d-none d-xl-block ">
                  <nav id="mobile-menu">
                    <ul>
                      {navMenuData.map((item) => (
                        <li key={item.id}>
                          <Link href={item.link}> {item.label} </Link>
                          {item.hasDropdown === true && (
                            <>
                              <ul className="sub-menu text-left">
                                {item?.subMenu?.map((itm, index) => (
                                  <li key={index}>
                                    <Link href={itm.link}> {itm.label} </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu />
        <div
          onClick={toggleSideMenu}
          className={sideMenuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
      <SidebarCart />
      <SidebarWishlist />
    </>
  );
};

export default HeaderOne;
