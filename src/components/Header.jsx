import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            </div>
        </header>
    );
}
