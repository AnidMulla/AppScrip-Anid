"use client";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import "./products.css";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  return (
    <div className="product_info_container" key={product.id}>
      <img
        src={product.image}
        width={168}
        height={224}
        alt={product.title}
        className="product_img"
      />
      <div className="product_info">
        <div>
          <p className="product_title">{product.title}</p>
          <p className="signin_text">
            <button
              className="singin_btn"
              onClick={() => toast.info("Available Soon!")}
            >
              Sign in{" "}
            </button>{" "}
            or Create an account to see pricing
          </p>
        </div>
        <IoMdHeartEmpty
          size={30}
          className="fav_icon"
          onClick={() => toast.info("Available Soon!")}
        />
      </div>
    </div>
  );
};

export default Product;
