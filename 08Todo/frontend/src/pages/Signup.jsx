import { useState } from "react";
import { signupUser } from "../api/auth";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = await signupUser({ email, password });
      login(data.token);           // auto-login after signup
      navigate("/login");
    } catch (err) {
      console.log(`err is ${err}`)
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Sign Up</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Create Account</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}
