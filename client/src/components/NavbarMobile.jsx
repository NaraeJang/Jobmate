import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavbarDesktop';
import { Logo } from '.';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <Logo />

        <ul>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default Navbar;
