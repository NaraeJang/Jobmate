import { Link, Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LoginAndRegisterPage';
import { Logo } from '../components';
import { FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'something went wrong');
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <h4>Get started with your free account today.</h4>
        <p className="no-info">No important information required.</p>
        <div className="input-container">
          <FormRow type="text" name="name" labelText="Given Name" />
          <FormRow type="text" name="lastName" labelText="Last Name" />
          <FormRow type="text" name="city" />
          <FormRow type="email" name="email" labelText="email" />
          <FormRow type="password" name="password" labelText="Password" />
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
