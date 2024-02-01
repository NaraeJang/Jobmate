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
            <li>
              <Link className="btn btn-primary btn-small" to="./dashboard">
                Try Demo User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navbar;
