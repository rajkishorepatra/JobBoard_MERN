import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css'
import NavbarSignup from "../../components/common/NavbarSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const obj = {
      name,
      email,
      password
    };
    console.log(obj);
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res);
      } else {
        const data = await response.json();
        console.log(data);
        alert(data.msg);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      alert(error.msg);
    }
  };

  return (
    <>
      <NavbarSignup/>
      <div className="bodyMain">
        <div class="main">
          <div class="signup">
            <label >Register</label>
            <input type="text" placeholder="Enter Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleSignup}>Create account</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
