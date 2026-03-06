import React from "react";
import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { data, isLoading, errMsg } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading products...
        </div>
      </div>
    );

  if (errMsg)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-medium">
        Error: {errMsg}
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Photos
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />

            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {item.title}
            </h2>

            <p className="text-blue-600 font-medium mt-1">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;