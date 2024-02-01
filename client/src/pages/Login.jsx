import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LoginAndRegisterPage';
import { Logo } from '../components';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="logo-container">
        <Link to="/" className="logo">
          <Logo />
        </Link>
      </div>
      <Form method="post" className="form">
        <h4>Hi there! Have we met before?</h4>
      </Form>
    </Wrapper>
  );
};
export default Login;
