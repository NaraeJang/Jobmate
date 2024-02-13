import { FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/NavbarUser';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';

const navbarUser = () => {
  const { user } = useDashboardContext();

  return (
    <Wrapper>
      <Link to="profile">
        <span>
          <FaUserCircle />
        </span>
        <p style={{ textTransform: 'capitalize' }}>
          hi, {user.name || 'user'}!
        </p>
      </Link>
    </Wrapper>
  );
};
export default navbarUser;
