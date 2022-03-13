import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

export default function RegisterPage() {
  return (
    <div className="container-md">
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
