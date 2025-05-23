import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const cartItems = useSelector(state => state.cart.items);
    return (
        <header className="h-16 bgblue-500 text-black shadow flex items-center">
            <div className="container mx-auto flex justify-between  items-center py-4 px-4">
                <Link to="/" className="text-xl font-bold">My Store</Link>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/" className="hover:underline">Главная</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:underline">Корзина</Link>
                        </li>
                    </ul>
                </nav>
                 <div>В корзине: {cartItems.reduce((sum, item) => sum + item.quantity, 0)} товаров</div>
            </div>
        </header>
    );
}
