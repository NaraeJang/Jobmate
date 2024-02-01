import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavbarDesktop';
import { Logo } from '.';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="./about">About</Link>
            </li>
            <li className="btn-container">
              <Link className="btn btn-primary btn-small" to="./register">
                Register
              </Link>
              <Link className="btn btn-secondary btn-small" to="./login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navbar;
