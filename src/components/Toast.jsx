import React from "react";

export default function Toast({ message, onClose }) {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
      {message}
      <button onClick={onClose} className="ml-4 font-bold">×</button>
    </div>
  );
}
