import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LoginAndRegisterPage';
import { Logo } from '../components';
import { FormRow, SubmitBtn } from '../components';

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = () => {
    navigate('/dashboard');
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <h4>Hi there! Have we met before?</h4>
        <div className="input-container">
          <FormRow type="email" name="email" labelText="email *" />
          <FormRow type="password" name="password" labelText="Password *" />
        </div>
        <div className="btn-container">
          <SubmitBtn text="Log In" submitting="Logging In..." />
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={loginDemoUser}>
            Try Demo User
          </button>
        </div>
        <p>
          Not a member yet? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
