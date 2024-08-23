"use client";
import React, { useState } from "react";
import "./products.css";
import CategoryFilter from "../categoryFilter/categoryFilter";
import Recomendation from "../recommended/Recommended";
import { Divider } from "@/components/ui";
import ProductsContainer from "./ProductsContainer";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const products = () => {
  const {
    products,

    filteredProducts,
  } = useProducts();
  const [showFilter, setShowFilter] = useState(true);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  "click", showMobileFilter;

  return (
    <div>
      <div className="discover_products">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <Divider />

      {/* Filter and Recomendation Section */}
      <div className="filter_rec_container">
        <div className="filter_totalItem_container">
          <p>
            {filteredProducts.length > 0
              ? filteredProducts?.length
              : products?.length}{" "}
            ITEMS
          </p>

          <div className="mobile_filter_container">
            <button
              className="filter_btn_m"
              onClick={() => {
                setShowMobileFilter(!showMobileFilter);
              }}
            >
              Filter
            </button>

            <div className={showMobileFilter && "filter_list_m"}>
              {showMobileFilter && <CategoryFilter />}
            </div>
          </div>
          <button
            className="filter_btn_d"
            onClick={() => setShowFilter(!showFilter)}
          >
            {!showFilter ? (
              <SlArrowRight className="right_arrow" />
            ) : (
              <SlArrowLeft className="right_arrow" />
            )}
            <span>{showFilter ? "Hide Filter" : "Show Filter"}</span>
          </button>
        </div>

        <div className="vertical_divider" />
        <Recomendation />
      </div>

      <Divider />
      <div className="filter_product_display_container">
        <div className="filter_list">{showFilter && <CategoryFilter />}</div>

        {/* Display Products */}
        <ProductsContainer />
      </div>
    </div>
  );
};

export default products;
