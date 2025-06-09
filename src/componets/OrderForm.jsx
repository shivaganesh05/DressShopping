import React, { useState, useEffect } from "react";

const OrderForm = ({ closeForm, cart }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    pincode: "",
    cod: false,
  });

  const [errors, setErrors] = useState({});
  const [showDataPopup, setShowDataPopup] = useState(false);
console.log(cart,"cartcartcartcartcartcart")
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formData.phonenumber.trim()) {
      isValid = false;
      newErrors.phonenumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      isValid = false;
      newErrors.phonenumber = "Phone number must be 10 digits.";
    }

    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)
    ) {
      isValid = false;
      newErrors.email = "Email is invalid.";
    }

    if (!formData.pincode.trim()) {
      isValid = false;
      newErrors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      isValid = false;
      newErrors.pincode = "Pincode must be 6 digits.";
    }

    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setShowDataPopup(true);
    }
  };

  const closeDataPopup = () => {
    setShowDataPopup(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div>
          <h1 className="font-bold">User Details</h1>
        </div>
        {/* (Existing form fields for user details) */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phonenumber" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your phone number"
          />
          {errors.phonenumber && (
            <p className="text-red-500 text-sm">{errors.phonenumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="pincode" className="block text-sm font-medium mb-1">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your pincode"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        <div> <h1 className="font-bold">Payment Menthod</h1></div>

        
        <div className="mb-4">
          <label htmlFor="cod" className="inline-flex items-center text-sm font-medium">
            <input
              type="checkbox"
              id="cod"
              name="cod"
              checked={formData.cod}
              onChange={handleChange}
              className="mr-2"
            />
            Cash on Delivery (COD)
          </label>
        </div>


        <div className="flex justify-between">
          <button
            type="button"
            onClick={closeForm}
            className="bg-text hover:scale-105 duration-200 text-primary py-1 px-4 rounded-full border-2 border-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>

      {showDataPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              User and Cart Details
            </h2>

            <div className="">
              {/* User details */}
              <table className="table-auto w-full text-sm text-left">
                  <tbody>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">Name</th>
                      <td className="py-2 px-4 text-gray-800">{formData.name}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">Email</th>
                      <td className="py-2 px-4 text-gray-800">{formData.email}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">Phone Number</th>
                      <td className="py-2 px-4 text-gray-800">{formData.phonenumber}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">Address</th>
                      <td className="py-2 px-4 text-gray-800">{formData.address}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">Pincode</th>
                      <td className="py-2 px-4 text-gray-800">{formData.pincode}</td>
                    </tr>
                    <tr>
                      <th className="py-2 px-4 text-gray-600 font-medium">COD</th>
                      <td className="py-2 px-4 text-gray-800">
                        {formData.cod ? "Yes" : "No"}
                      </td>
                    </tr>
                  </tbody>
                </table>

              {/* Cart details */}
              <h3 className="text-lg font-medium mb-2">Cart Details</h3>
              <ul className="list-disc pl-6">
                {cart.map((item, index) => (
                  <li key={index} className="mb-2">
                    <img
                          src={item.img}
                          alt={item.title}
                          className="w-10 h-10"
                        />
                    {item.title} 
                    


                  </li>
                ))}
              </ul>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={closeDataPopup}
                  className="bg-text hover:scale-105 duration-200 text-primary py-1 px-4 rounded-full border-2 border-primary"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
