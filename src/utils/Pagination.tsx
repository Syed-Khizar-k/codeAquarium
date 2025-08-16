import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="basic-pagination basic-pagination-2 text-center mt-20">
            <ul>
              <li>
                <Link href="">
                  <i className="fas fa-angle-double-left"></i>
                </Link>
              </li>
              <li>
                <Link href="">01</Link>
              </li>
              <li>
                <Link href="">02</Link>
              </li>
              <li>
                <Link href="">03</Link>
              </li>
              <li>
                <Link href="">
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
