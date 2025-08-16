"use client";
import { cart_product } from "@/redux/slices/cartSlice";
import { remove_wishlist_product } from "@/redux/slices/wishlistSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const WishlistArea = () => {
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.cartProducts
  );
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => e.preventDefault();
  return (
    <>
      <div className="cart-area pt-100 pb-100">
        <div className="container container-small">
          {wishlist?.length ? (
            <>
              <div className="row">
                <div className="col-12">
                  <form action="#">
                    <div className="table-content table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="product-thumbnail">Images</th>
                            <th className="cart-product-name">Product</th>
                            <th className="product-price">Unit Price</th>
                            <th className="product-quantity">Action</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlist?.map((item) => {
                            const totalPrice =
                              (item?.totalCard ?? 0) * item?.price;
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
                                <td className="product-quantity">
                                  <button
                                    onClick={() => dispatch(cart_product(item))}
                                    type="button"
                                    className="bd-fill__btn"
                                  >
                                    Add to Cart
                                  </button>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">
                                    ${totalPrice}.00
                                  </span>
                                </td>
                                <td
                                  onClick={() =>
                                    dispatch(remove_wishlist_product(item))
                                  }
                                  className="product-remove"
                                >
                                  <button type="button">
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-center empty_message pt-20">Your Wishlist Is Empty</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistArea;
