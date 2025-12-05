import React, { useState } from "react";
import axios from "axios"

const App = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const getRes = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/", {
      userName,
      email,
      password
    })
      .then((e) => {
        console.log(e.data);

      })
      .catch((e) => {
        console.log(e.data);

      })
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-700">
      <form className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4">

        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Register
        </h2>

        <div className="flex flex-col space-y-3">

          <input type="text" placeholder="Enter Username" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={userName} onChange={(e) => setUserName(e.target.value)} />

          <input type="email" placeholder="Enter Email" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={email} onChange={(e) => setEmail(e.target.value)} />


          <input type="password" placeholder="Enter Password" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="w-full bg-red-400 text-white py-2 rounded-lg cursor-pointer"
          onClick={() => getRes()} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;