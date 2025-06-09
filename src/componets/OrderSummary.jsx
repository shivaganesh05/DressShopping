import React from "react";

const OrderSummary = ({ data, closeSummary }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <ul>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Phone Number:</strong> {data.phonenumber}</li>
        <li><strong>Address:</strong> {data.address}</li>
        <li><strong>Pincode:</strong> {data.pincode}</li>
      </ul>
      <button
        onClick={closeSummary}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Close
      </button>
    </div>
  );
};

export default OrderSummary;
