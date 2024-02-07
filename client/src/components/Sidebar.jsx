import Wrapper from '../assets/wrappers/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { DashboardNavLinks, Logo } from './';
import { FiLogOut } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Sidebar = () => {
  const { showSidebar, toggleSidebar, logoutUser } = useDashboardContext();

  return (
    <Wrapper className={showSidebar ? `open-sidebar` : ''}>
      <div
        className={
          showSidebar ? `main-container show-sidebar` : 'main-container'
        }>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          {showSidebar ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        <div className="sidebar-container">
          <header>
            <Logo />
          </header>
          <div className="content">
            <DashboardNavLinks />
          </div>
          <button type="button" className="logout" onClick={logoutUser}>
            <FiLogOut />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
