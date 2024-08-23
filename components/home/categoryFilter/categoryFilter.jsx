"use client";
import React, { useEffect, useState } from "react";
import "./categoryFilter.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { fetchAllProducts } from "@/apis/productsApi";

const CategoryFilter = () => {
  const [showIdealCategories, setShowIdealCategories] = useState(true);
  const [showOtherCategories, setShowOtherCategories] = useState(false);

  const [categories, setCategories] = useState({
    menClothing: true,
    womensClothing: true,
    jewelery: true,
    electronics: true,
    all: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const { setProducts, setFilteredProducts } = useProducts();

  useEffect(() => {
    getFilteredProduct(selectedCategory);
  }, [selectedCategory]);

  const getFilteredProduct = async (selectedCategory) => {
    if (selectedCategory && selectedCategory !== "all") {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredProducts((prev) => [...prev, ...data]);
        });
    } else if (selectedCategory === "all") {
      setFilteredProducts([]);
      const data = await fetchAllProducts();
      setProducts(data);
      setCategories({
        menClothing: true,
        womensClothing: true,
        jewelery: true,
        electronics: true,
      });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category_filter_section">
      {/* IDEAL FOR MEN AND WOMEN SECTION */}
      <div>
        <div
          className="ideal_categories_button"
          onClick={() => setShowIdealCategories(!showIdealCategories)}
        >
          <h3>Ideal For</h3>
          {showIdealCategories ? <SlArrowUp /> : <SlArrowDown />}
        </div>

        <button
          className="select_all_button"
          onClick={() => {
            setCategories({
              ...categories,
              all: !categories.all,
            });
            if (!categories.all) {
              // handleCategoryChange("");
            } else {
              handleCategoryChange("all");
            }
          }}
        >
          All
        </button>

        {showIdealCategories && (
          <div className="different_categories">
            <button
              className="unselect_button"
              onClick={() => {
                setCategories({
                  ...categories,
                  all: !categories.all,
                });
                if (!categories.all) {
                  // handleCategoryChange("");
                } else {
                  handleCategoryChange("all");
                }
              }}
            >
              Unselect all
            </button>

            <div className="men_category">
              <input
                type="checkbox"
                checked={!categories.menClothing}
                onChange={() => {
                  setCategories({
                    ...categories,
                    menClothing: !categories.menClothing,
                  });
                  if (!categories.menClothing) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("men's clothing");
                  }
                }}
              />
              <span>Men</span>
            </div>

            <div className="women_category">
              <input
                type="checkbox"
                checked={!categories.womensClothing}
                onChange={() => {
                  setCategories({
                    ...categories,
                    womensClothing: !categories.womensClothing,
                  });
                  if (!categories.womensClothing) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("women's clothing");
                  }
                }}
              />
              <span>Women</span>
            </div>
          </div>
        )}
      </div>

      {/* OTHERS CATEGORY SECTION */}
      <div>
        <div
          className="other_categories_button"
          onClick={() => setShowOtherCategories(!showOtherCategories)}
        >
          <h3>Other Categories</h3>
          {showOtherCategories ? <SlArrowUp /> : <SlArrowDown />}
        </div>

        <button
          className="select_all_button"
          onClick={() => {
            setCategories({
              ...categories,
              all: !categories.all,
            });
            if (!categories.all) {
              // handleCategoryChange("");
            } else {
              handleCategoryChange("all");
            }
          }}
        >
          All
        </button>

        {showOtherCategories && (
          <div className="different_categories">
            <button
              className="unselect_button"
              onClick={() => {
                setCategories({
                  ...categories,
                  all: !categories.all,
                });
                if (!categories.all) {
                  // handleCategoryChange("");
                } else {
                  handleCategoryChange("all");
                }
              }}
            >
              Unselect all
            </button>

            <div className="electronics_category">
              <input
                type="checkbox"
                checked={!categories.electronics}
                onChange={() => {
                  setCategories({
                    ...categories,
                    electronics: !categories.electronics,
                  });
                  if (!categories.electronics) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("electronics");
                  }
                }}
              />
              <span>Electronics</span>
            </div>

            <div className="jewellery_category">
              <input
                type="checkbox"
                checked={!categories.jewelery}
                onChange={() => {
                  setCategories({
                    ...categories,
                    jewelery: !categories.jewelery,
                  });
                  if (!categories.jewelery) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("jewelery");
                  }
                }}
              />
              <span>Jewellery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
