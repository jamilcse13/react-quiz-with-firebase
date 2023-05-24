import classes from "../../styles/Signup.module.css";
import Button from "../Input/Button";
import Checkbox from "../Input/Checkbox";
import TextInput from "../Input/TextInput";
import Form from "../Signup/Form";
import Illustration from "../Signup/Illustration";
import singupImage from "../../assets/images/signup.svg";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration src={singupImage} alt="SignUp"/>
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text=" I agree to the Terms & Conditions" />

          <Button>Submit now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
