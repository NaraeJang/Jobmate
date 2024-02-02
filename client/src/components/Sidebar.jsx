import Wrapper from '../assets/wrappers/Sidebar';
import DashboardNavLinks from './DashboardNavLinks';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <Logo />
          </header>
          <DashboardNavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
