import React, { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import Navbar from "../Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      setLoading(true);
      navigate("/Dashboard");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await fetch("https://api.stunhaul.com/api/vi/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigate("/Dashboard");
    } else {
      alert("admin not found");
    }
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div class="mt-20 block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
        <form>
          <div class="form-group mb-6 text-left">
            <label
              for="exampleInputEmail2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div class="form-group mb-6 text-left">
            <label class="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              class="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            class="w-full px-6 py-2.5 bg-gray-900 text-white font-medium text-xs uppercase rounded shadow-md
                hover:bg-gray-700 hover:shadow-lg"
          >
            Sign in
          </button>
        </form>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Login;
