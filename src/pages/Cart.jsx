import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Корзина пуста</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Цена: {item.price}₽</p>
                  <p className="text-gray-600">Кол-во: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
