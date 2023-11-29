import "./SignIn.scss";
import { signInBackground } from "../../config/config";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(true);

  const changePasswordType = () => {
    setPasswordType((prev) => !prev);
  };

  const dots = "●●●●●●●●";
  return (
    <div
      className="sign-in-page"
      style={{ backgroundImage: `url(${signInBackground})` }}
    >
      <div className="sign-in-container">
        <div className="username">
          <p>Username</p>
          <input
            type="text"
            value={username}
            placeholder="Joe"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            value={password}
            type={passwordType ? "password" : "text"}
            placeholder={dots}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              password && changePasswordType();
            }}
          >
            {passwordType ? "Show Password" : "Hide Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
