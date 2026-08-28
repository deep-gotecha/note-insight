import { useState } from "react";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Signup Successful");

      navigate("/dashboard");

    } catch (error: any) {

      alert(error.message);

    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}