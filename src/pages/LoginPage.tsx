import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <div className="container-md">
      <h1>Log in</h1>
      <Login />
      <p>
        Do not have account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
