"use client";
import { fetchAllProducts } from "@/apis/productsApi";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { Loader } from "@/components/ui";

const ProductsContainer = () => {
  const { products, setProducts, filteredProducts, isLodaing, setisLoading } =
    useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setisLoading(true);
    const data = await fetchAllProducts();
    console.log(data);
    setProducts(data);
    setisLoading(false);
  };

  console.log("filteredProducts", filteredProducts);

  return (
    <div className="products_container">
      {!isLodaing ? (
        (filteredProducts?.length > 0 ? filteredProducts : products).map(
          (product) => <Product product={product} />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductsContainer;
