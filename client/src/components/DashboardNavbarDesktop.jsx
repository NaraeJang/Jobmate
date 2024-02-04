import Wrapper from '../assets/wrappers/DashboardNavbarDesktop';
import { NavbarUser, ThemeToggle } from '.';

const DashboardNavbarDesktop = () => {
  return (
    <Wrapper>
      <ThemeToggle />
      <div className="user-container">
        <NavbarUser />
      </div>
    </Wrapper>
  );
};
export default DashboardNavbarDesktop;
