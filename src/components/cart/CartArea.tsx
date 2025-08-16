"use client";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const CartArea = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product?.price ?? 0) * (product?.totalCard ?? 0),
    0
  );
  const handleChange = (e: any) => {};
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container container-small">
          {cartProducts?.length ? (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-quantity">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts?.map((item) => {
                          const productPrice =
                            (item.price ?? 0) * (item.totalCard ?? 0);
                          return (
                            <tr key={item?._id}>
                              <td className="product-thumbnail">
                                <Link href="/shop-details">
                                  <Image
                                    width={50}
                                    height={50}
                                    style={{ width: "auto", height: "auto" }}
                                    src={item?.img}
                                    alt="img"
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link href="/shop-details">
                                  {item?.productName}
                                </Link>
                              </td>
                              <td className="product-price">
                                <span className="amount">
                                  ${item?.price}.00
                                </span>
                              </td>
                              <td className="product-quantity text-center">
                                <div className="product-quantity mt-10 mb-10">
                                  <div className="product-quantity-form">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                      <button
                                        onClick={() =>
                                          dispatch(decrease_quantity(item))
                                        }
                                        className="cart-minus"
                                      >
                                        <i className="far fa-minus"></i>
                                      </button>
                                      <input
                                        className="cart-input"
                                        type="text"
                                        onChange={handleChange}
                                        value={item.totalCard}
                                      />
                                      <button
                                        onClick={() =>
                                          dispatch(cart_product(item))
                                        }
                                        className="cart-plus"
                                      >
                                        <i className="far fa-plus"></i>
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </td>
                               
                              <td className="product-subtotal">
                                <span className="amount">
                                  ${productPrice}.00
                                </span>
                              </td>
                              <td className="product-remove">
                                <button
                                  type="button"
                                  onClick={() =>
                                    dispatch(remove_cart_product(item))
                                  }
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon d-flex align-items-center">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            value=""
                            placeholder="Coupon code"
                            type="text"
                          />
                          <button
                            className="bd-fill__btn"
                            name="apply_coupon"
                            type="submit"
                          >
                            Apply coupon
                          </button>
                        </div>
                        <div className="coupon2">
                          <button
                            onClick={() => dispatch(clear_cart())}
                            className="bd-fill__btn w-100"
                            name="update_cart"
                            type="submit"
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal <span>${totalPrice}.00</span>
                          </li>
                          <li>
                            Total <span>${totalPrice}.00</span>
                          </li>
                        </ul>
                        <Link className="bd-unfill__btn" href="/checkout">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-center empty_message pt-20">Your Cart Is Empty</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CartArea;
