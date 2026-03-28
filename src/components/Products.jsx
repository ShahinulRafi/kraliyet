import React, { useState } from "react";
import emailjs from "emailjs-com";

const productsData = [
  {
    id: 1,
    name: "Classic Black Cap",
    price: 500,
    image: "/cap1.jpg",
  },
  {
    id: 2,
    name: "White Street Cap",
    price: 550,
    image: "/cap2.jpg",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({});

  const openModal = (product) => {
    setSelectedProduct(product);
    setForm({ name: "", phone: "", address: "", quantity: 1 });
    setErrors({});
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name || form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^[0-9]{11}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 11 digits";
    }

    if (!form.address || form.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    if (form.quantity < 1) {
      newErrors.quantity = "Minimum quantity is 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalPrice = selectedProduct
    ? selectedProduct.price * form.quantity
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const orderData = {
      ...form,
      product: selectedProduct.name,
      unitPrice: selectedProduct.price,
      total: totalPrice,
    };

    console.log(orderData); // send to backend/firebase later
    emailjs.send(
      "service_cvnmnjf",
      "template_i28iyud",
      orderData,
      "Dy8gPVm7lvgmjYIUN",
    );
    alert("Order placed successfully!");
    closeModal();
  };

  return (
    <div className="p-6 text-black bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Check Our Caps</h2>

      {/* Products */}
      <div className="grid md:grid-cols-2 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>

            <p className="text-gray-600">৳{product.price}</p>

            <button
              onClick={() => openModal(product)}
              className="mt-4 px-4 py-2 bg-black text-white rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Order {selectedProduct.name}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}

              <textarea
                name="address"
                placeholder="Address"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}

              {/* Autofilled */}
              <input
                type="text"
                value={selectedProduct.name}
                disabled
                className="w-full border p-2 rounded bg-gray-100"
              />

              <input
                type="text"
                value={`৳${selectedProduct.price}`}
                disabled
                className="w-full border p-2 rounded bg-gray-100"
              />

              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.quantity && (
                <p className="text-red-500">{errors.quantity}</p>
              )}

              {/* TOTAL */}
              <p className="font-bold text-lg">Total: ৳{totalPrice}</p>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
