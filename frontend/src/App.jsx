import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState();
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  //   const getRes = (e) =>{
  //   e.preventDefault()
  // }
  async function getRes() {
    let res = await fetch("http://localhost:8000/");
    let data = await res.json();
    console.log(data);
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-700">
  <form className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4">

        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Log in
        </h2>

        <div className="flex flex-col space-y-3">
          <input
            type="email" placeholder="Enter Email" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={email} />

          <input
            type="text" placeholder="Enter Username" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={userName} />

          <input
            type="password" placeholder="Enter Password" className="border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={password} />
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-lg cursor-pointer " onClick={() => getRes()}>
          Submit
        </button>
      </form> 
      
    </div>
  );
};

export default App;
