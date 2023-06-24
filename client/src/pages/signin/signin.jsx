import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css'
import NavbarSignIn from "../../components/common/NavbarSignIn";
function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res);
      } else {
        const data = await response.json();
        alert("You are logged in!");
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <>
      <NavbarSignIn />
      <div className="bodyMain">
        <div class="main">
          <div class="signup">
            <label >Login</label>
            <input type="email" placeholder="Enter Email " id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button id="mybutton" onClick={handleLogin}>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
