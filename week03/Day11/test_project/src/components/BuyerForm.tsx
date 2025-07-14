import React, { useState } from 'react';

export default function BuyerForm() {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Minimum 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Invalid email';
    }

    if (!formData.address.trim()) {
      errs.address = 'Address is required';
    } else if (formData.address.trim().length < 5) {
      errs.address = 'Minimum 5 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Buyer Info:', formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white shadow-lg p-8 rounded-xl border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Buyer</h2>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
          }`}
          placeholder="Enter full name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
          }`}
          placeholder="Enter email address"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
            errors.address ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
          }`}
          placeholder="Enter address"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}
