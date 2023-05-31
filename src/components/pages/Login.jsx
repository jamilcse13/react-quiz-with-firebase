import loginImage from "../../assets/images/login.svg";
import LoginFrom from "../Login/LoginFrom";
import Illustration from "../Signup/Illustration";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={loginImage} alt="Login" />
        <LoginFrom />
      </div>
    </>
  );
}
