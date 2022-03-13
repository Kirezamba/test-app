import Form from "./Form";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/reduxHooks";

export default function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({ email: user.email, id: user.uid }));
      })
      .catch(() => alert("Invalid User!"));
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
}
