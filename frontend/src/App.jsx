import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-700">
      <form className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Register
        </h2>

        <div className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          <input
            type="text"
            placeholder="Enter Username"
            className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-400 text-white py-2 rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
