import { useAuthStore } from "../store/authStore";
import { loginUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try{
            const data = await loginUser({ email, password });
            login(data.token);
            navigate("/");
        } catch{
            alert("Login failed");
        }
    };

    return (
        // <h1>hii</h1>
        <>
        <form onSubmit={submit}>
            {console.log("Rendering Login Page")}
            <h2>Login</h2>

            <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)
            }
            />
                  <button type="submit">Login</button>

        </form>
        <p>
  Don’t have an account? <Link to="/signup">Sign up</Link>
</p>
            
        </>

    )

}