import Wrapper from '../assets/wrappers/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { DashboardNavLinks, Logo } from './';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

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
          <Link className="logout" to="/">
            <FiLogOut />
            <p>Log Out</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
