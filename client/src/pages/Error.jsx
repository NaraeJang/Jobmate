import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container">
      <h2>404</h2>
      <div>
        <h3>Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
};
export default Error;
