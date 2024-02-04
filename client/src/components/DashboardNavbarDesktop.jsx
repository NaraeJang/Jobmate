import Wrapper from '../assets/wrappers/DashboardNavbarDesktop';
import { NavbarUser, ThemeToggle } from '.';

const DashboardNavbarDesktop = () => {
  return (
    <Wrapper>
      <ThemeToggle />
      <div className="user-container">
        <NavbarUser />
        <p>Demo User</p>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbarDesktop;
