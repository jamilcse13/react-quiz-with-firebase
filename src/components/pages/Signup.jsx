import singupImage from "../../assets/images/signup.svg";
import Illustration from "../Signup/Illustration";
import SignupForm from "../Signup/SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration src={singupImage} alt="SignUp" />
        <SignupForm />
      </div>
    </>
  );
}
