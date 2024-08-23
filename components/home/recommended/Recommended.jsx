"use client";
import React, { useEffect, useState } from "react";
import "./recommended.css";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { fetchAllProducts } from "@/apis/productsApi";
import { IoCheckmarkSharp } from "react-icons/io5";

const Recommended = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSortItem, setActiveSortItem] = useState("");

  const { setProducts } = useProducts();

  function sortProductsByRating(products, item) {
    if (item === "rating")
      return products.sort((a, b) => b.rating.rate - a.rating.rate);
    else if (item === "desc") return products.sort((a, b) => b.price - a.price);
    else if (item === "asc") return products.sort((a, b) => a.price - b.price);
  }

  async function sort(item) {
    const productsFromAPI = await fetchAllProducts();
    const sortedProducts = sortProductsByRating(productsFromAPI, item);

    "sortedProducts", sortedProducts;

    setProducts(sortedProducts);
    setShowDropdown(false);
  }

  return (
    <div className="dropdown_container ">
      {/* DROPDONW BUTTON */}
      <button
        className="recommended_btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p>Recommended</p>
        {showDropdown ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}
      </button>

      {/* DROPDOWN LISTS */}
      {showDropdown && (
        <div className="dropdown_list_container">
          <ul className="dropdown_list">
            <li
              onClick={() => {
                sort("rating");
                setActiveSortItem("rating");
              }}
            >
              {activeSortItem === "rating" && (
                <IoCheckmarkSharp color="green" size={20} />
              )}
              <span>POPULAR</span>
            </li>
            <li
              onClick={() => {
                sort("desc");
                setActiveSortItem("desc");
              }}
            >
              {activeSortItem === "desc" && (
                <IoCheckmarkSharp color="green" size={20} />
              )}
              <span>PRICE: HIGH TO LOW</span>
            </li>
            <li
              onClick={() => {
                sort("asc");
                setActiveSortItem("asc");
              }}
            >
              {activeSortItem === "asc" && (
                <IoCheckmarkSharp color="green" size={20} />
              )}
              <span>PRICE: LOW TO HIGH</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recommended;
