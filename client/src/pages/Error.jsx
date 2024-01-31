import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <div className="box-text">
          <h3>Page Not Found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Error;
