import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import { useAuth } from "../hooks/useAuth";

export default function RegisterPage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuth) {
      return navigate("/login");
    }
  }, [isAuth, navigate]);
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
