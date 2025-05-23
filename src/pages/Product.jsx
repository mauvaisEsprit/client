import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Товар #{id}</h1>
      <p className="text-gray-600">Здесь будет описание товара.</p>
    </div>
  );
}

export default Product;
