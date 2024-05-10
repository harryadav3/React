import React from 'react';
import { useForm } from 'react-hook-form';

const Question12 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.email && (
            <span className="text-red-500">Valid email is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, minLength: 8 })}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.password && (
            <span className="text-red-500">
              Password must be at least 8 characters long
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Question12