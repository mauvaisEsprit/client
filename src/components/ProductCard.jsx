import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Toast from "./Toast";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
  <img src={product.image} alt={product.name} className="rounded w-full h-48 object-cover" />
  <h3>{product.name}</h3>
  <p>{product.price}€</p>
</Link>
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        В корзину
      </button>
      {showToast && (
        <Toast message="Товар добавлен в корзину" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
