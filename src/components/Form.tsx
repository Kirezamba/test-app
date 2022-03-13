import React, { FC } from "react";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div className="container-md">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </div>

      <button className="btn btn-primary" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};
export default Form;
