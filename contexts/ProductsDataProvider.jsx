"use client";
import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("Something is wrong with the ProductsContext");
  }
  return context;
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLodaing, setisLoading] = useState(false);

  const data = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    isLodaing,
    setisLoading,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
