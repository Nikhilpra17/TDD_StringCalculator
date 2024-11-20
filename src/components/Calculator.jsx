import React, { useState } from "react";
import add from "./../utils/add.js";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 via-gray-100 to-pink-100">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white shadow-lg">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8">
          String Calculator
        </h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers..."
          className="p-3 border-2 border-gray-300 rounded-lg mb-2 w-3/4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Example Text */}
        <p className="text-sm text-gray-500 italic mb-6">
          Example: Enter "1,2" to calculate the sum (result will be 3)
        </p>
        <button
          onClick={handleCalculate}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Calculate
        </button>
        {error && (
          <div className="mt-6 text-red-600 font-medium text-lg italic mb-6">
            Error: {error}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-1/2">
        {result !== null ? (
          <div className="p-10 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 text-white font-extrabold text-8xl rounded-lg shadow-lg animate-pulse">
            {result}
          </div>
        ) : (
          <div className="text-gray-400 text-4xl font-bold">
            Enter values to calculate
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
