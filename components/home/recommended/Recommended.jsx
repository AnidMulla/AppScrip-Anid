"use client";
import React, { useState } from "react";
import "./recommended.css";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { fetchAllProducts } from "@/apis/Api";
import { IoCheckmarkSharp } from "react-icons/io5";

const Recommended = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const { setProducts } = useProducts();

  const sortProducts = (products, sortOption) => {
    switch (sortOption) {
      case "rating":
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
      case "desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "asc":
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const handleSort = async (sortOption) => {
    try {
      const products = await fetchAllProducts();
      const sortedProducts = sortProducts(products, sortOption);
      setProducts(sortedProducts);
      setSelectedSortOption(sortOption);
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Failed to fetch and sort products:", error);
    }
  };

  return (
    <div className="dropdown-container">
      {/* Dropdown Button */}
      <button
        className="recommended-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p>Recommended</p>
        {isDropdownOpen ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}
      </button>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            <li
              onClick={() => handleSort("rating")}
              className={selectedSortOption === "rating" ? "active" : ""}
            >
              {selectedSortOption === "rating" && (
                <IoCheckmarkSharp color="green" size={20} />
              )}
              <span>POPULAR</span>
            </li>
            <li
              onClick={() => handleSort("desc")}
              className={selectedSortOption === "desc" ? "active" : ""}
            >
              {selectedSortOption === "desc" && (
                <IoCheckmarkSharp color="green" size={20} />
              )}
              <span>PRICE: HIGH TO LOW</span>
            </li>
            <li
              onClick={() => handleSort("asc")}
              className={selectedSortOption === "asc" ? "active" : ""}
            >
              {selectedSortOption === "asc" && (
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
