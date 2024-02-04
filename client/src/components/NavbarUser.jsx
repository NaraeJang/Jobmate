import { FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/NavbarUser';
import { Link } from 'react-router-dom';

const navbarUser = () => {
  return (
    <Wrapper>
      <Link to="profile">
        <span>
          <FaUserCircle />
        </span>
        <p>Demo User</p>
      </Link>
    </Wrapper>
  );
};
export default navbarUser;
