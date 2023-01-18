import React from "react";
import { NavLink } from "react-router-dom";
import ProductsContainer from "./components/productsContainer";
const ProductsPage = () => {
  return (
    <>
      <div className="w-full mt-10">
        <div className="flex w-full">
          <div className="ml-16 text-4xl font-bold">Products</div>
          <div className="ml-auto mt-5 mr-16">
            <NavLink
              to="add-product"
              className="px-6 p-3 rounded bg-blue-600 text-white"
            >
              Create
            </NavLink>
          </div>
        </div>
        <div>
          <ProductsContainer />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
