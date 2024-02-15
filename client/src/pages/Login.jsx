import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LoginAndRegisterPage';
import { Logo } from '../components';
import { FormRow, SubmitBtn } from '../components';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Logged in successfully!');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(
      error?.response?.data?.msg || 'Something went wrong, please try it later'
    );
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const demoUser = { email: 'demo-user@test.com', password: 'Demouser0117' };
    try {
      await customFetch.post('/auth/login', demoUser);
      toast.success('Logged in demo user account');
      return navigate('/dashboard');
    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
          'Something went wrong, please try it later'
      );
      return error;
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <h4>Hi there! Have we met before?</h4>
        <div className="input-container">
          <FormRow type="email" name="email" labelText="email" />
          <FormRow type="password" name="password" labelText="Password" />
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
