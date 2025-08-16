"use client";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import discover from "../../public/assets/img/cards/card-1.png";
import masterCard from "../../public/assets/img/cards/card-2.png";
import papyle from "../../public/assets/img/cards/card-3.png";
import visa from "../../public/assets/img/cards/card-4.png";
import GetRatting from "@/hooks/GetRatting";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import { prodcutData } from "@/data/product-data";
import useGlobalContext from "@/hooks/use-context";
import { ProductType } from "@/interFace/interFace";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ProductModal = () => {
  const { modalId } = useGlobalContext();
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const myProduct = prodcutData.find(
    (item) => item._id == modalId
  ) as ProductType;
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };

  const handDecressCart = (product: ProductType) => {
    dispatch(decrease_quantity(product));
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const quantity = cartProducts.find((item) => item?._id === myProduct?._id);
  const totalCart = quantity?.totalCard;

  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="productmodal"
        //   tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  <div className="bd__shop-details-inner mb-55">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-details__thumb-inner small-device p-relative">
                          <div className="bd__shop-details-img-gallery mb-30">
                            <div className="product-details-active swiper-container">
                              <div className="swiper-wrappers">
                                <Swiper
                                  thumbs={{ swiper: thumbsSwiper }}
                                  loop={true}
                                  spaceBetween={0}
                                  slidesPerView={1}
                                  freeMode={false}
                                  watchSlidesProgress={true}
                                  modules={[
                                    Navigation,
                                    Controller,
                                    FreeMode,
                                    Thumbs,
                                  ]}
                                  navigation={{
                                    nextEl: ".product-details__button-next",
                                    prevEl: ".product-details__button-prev",
                                  }}
                                >
                                  <SwiperSlide>
                                    <div className="swiper-slides">
                                      <div className="bd-product__details-large-img w-img">
                                        <Image
                                          src={myProduct?.img}
                                          alt="product-details-img"
                                          width={577}
                                          height={577}
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="modal-product-info shop-details-info">
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <Link href="#">
                                  <GetRatting averageRating={4} />
                                </Link>
                              </li>

                              <li className="review-total">
                                {" "}
                                <Link href="#">2 Ratings</Link>
                              </li>
                            </ul>
                          </div>
                          <h3>{myProduct?.productName}</h3>
                          <div className="product-price">
                            <span>${myProduct?.price}.00</span>
                            <del>${myProduct?.oldPrice}.00</del>
                          </div>
                          <div className="modal-product-meta bd__product-details-menu-1">
                            <ul>
                              <li>
                                <strong>Products:</strong>
                                <span>
                                  <Link href="/shop">Vegetable</Link>
                                  <Link href="/shop">Fruits</Link>
                                  <Link href="/shop">Dairy Milk</Link>
                                  <Link href="/shop">Bakery</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-product-meta bd__product-details-menu-1">
                            <p>
                              Experience the captivating aroma and delicate
                              texture of Basmati Rice, a treasured grain that
                              hails from the lush fields of India. Renowned for
                              its long, slender grains and distinctive
                              fragrance, our Basmati Rice
                            </p>
                          </div>
                          <div className="product-quantity-cart mb-25">
                            <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button
                                  onClick={() => handDecressCart(myProduct)}
                                  className="cart-minus"
                                >
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  type="text"
                                  readOnly
                                  value={totalCart ? totalCart : 0}
                                />
                                <button
                                  className="cart-plus"
                                  onClick={() => handleAddToCart(myProduct)}
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </form>
                            </div>
                            <span onClick={() => handleAddToCart(myProduct)}>
                              <Link
                                className="cart-btn bd-fill__btn"
                                href="/cart"
                              >
                                <i className="fal fa-cart-arrow-down"></i> Add
                                to Cart
                              </Link>
                            </span>
                          </div>
                          <div className="bd__product-details-menu-3">
                            <ul>
                              <li>
                                <span
                                  className="wishlist-btn"
                                  title="Wishlist"
                                  onClick={() =>
                                    dispatch(wishlist_product(myProduct))
                                  }
                                >
                                  <i className="far fa-heart"></i>
                                  <span>Add to Wishlist</span>
                                </span>
                              </li>
                              <li>
                                <span
                                  className="wishlist-btn cart-btn"
                                  title="Compare"
                                >
                                  <i className="fas fa-exchange-alt"></i>
                                  <span>Compare</span>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="bd__social-media">
                            <ul>
                              <li>Share:</li>
                              <li>
                                <Link
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="https://twitter.com/?lang=en"
                                  title="Twitter"
                                >
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="https://www.linkedin.com/"
                                  title="Linkedin"
                                  target="_blank"
                                >
                                  <i className="fab fa-linkedin"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                  title="Instagram"
                                >
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="bd__safe-checkout">
                            <h5>Guaranteed Safe Checkout</h5>
                            <Link href="#">
                              <Image src={discover} alt="Payment Image" />
                            </Link>
                            <Link href="#">
                              <Image src={masterCard} alt="Payment Image" />
                            </Link>
                            <Link href="#">
                              <Image src={papyle} alt="Payment Image" />
                            </Link>
                            <Link href="#">
                              <Image src={visa} alt="Payment Image" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
