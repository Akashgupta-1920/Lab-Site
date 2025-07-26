import React from "react";

const CartPage = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-gray-600">No tests/packages added to cart.</div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.labName}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 font-medium">₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Proceed to Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
