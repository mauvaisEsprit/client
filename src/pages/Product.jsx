import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Toast from "../components/Toast";

// Временно — список товаров прямо здесь
const products = [
  {
    id: 1,
    name: "Кроссовки Nike",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG5pa2V8ZW58MHx8MHx8fDA%3D",
    description: "Очень удобные и стильные кроссовки Nike для повседневной носки.",
  },
  {
    id: 2,
    name: "Кроссовки Adidas",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzfGVufDB8fDB8fHww",
    description: "Классические кроссовки Adidas. Комфорт и качество на высоте.",
  },
  {
    id: 3,
    name: "Кепка Puma",
    price: 15.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMtqOrynvENLUaGj5Bv8_mGNkGbdtEhDz-w&safe=active&usqp=CAU",
    description: "Кепка Puma. Комфорт и качество на высоте.",
  },
];

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const handleAdd = () => {
    dispatch(addToCart(product));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">{product.price}€</p>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Добавить в корзину
          </button>

          {showToast && (
            <Toast message="Товар добавлен в корзину" onClose={() => setShowToast(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
