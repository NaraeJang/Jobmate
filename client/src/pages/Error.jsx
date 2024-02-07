import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="container">
          <h2>404</h2>
          <div className="box-text">
            <h3>Page Not Found</h3>
            <p>We can't seem to find the page you are looking for</p>
            <Link to="/dashboard">Back Home</Link>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <h2 style={{ fontSize: `8rem` }}>Oops!</h2>
        <div className="box-text">
          <h3 style={{ fontSize: `1.5rem` }}>Something went wrong</h3>
          <p>Please, try again later.</p>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Error;
