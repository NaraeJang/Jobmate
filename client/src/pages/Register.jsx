import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LoginAndRegisterPage';
import { Logo } from '../components';
import { FormRow, SubmitBtn } from '../components';

const Register = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <h4>Get started with your free count today.</h4>
        <p className="no-info">No important information required.</p>
        <div className="input-container">
          <FormRow type="text" name="givenName" labelText="Given Name *" />
          <FormRow type="text" name="lastName" labelText="Last Name *" />
          <FormRow type="text" name="city" />
          <FormRow type="email" name="email" labelText="email *" />
          <FormRow type="password" name="password" labelText="Password *" />
        </div>
        <div className="btn-container">
          <SubmitBtn text="Register" submitting="Creating User..." />
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
