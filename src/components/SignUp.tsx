import Form from "./Form";
import { setUser } from "../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/reduxHooks";

export default function SignUp() {
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({ email: user.email, id: user.uid }));
      })
      .catch(() => {
        if (password.length < 6) {
          alert("Password must be atleast 6 symbols!");
        } else {
          alert("User exists!");
        }
      });
  };
  return <Form title="Register" handleClick={handleRegister} />;
}
