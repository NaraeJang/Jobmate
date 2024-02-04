import Wrapper from '../assets/wrappers/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { DashboardNavLinks } from './';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useState, useRef } from 'react';

const Sidebar = () => {
  // const { showSidebar, toggleSidebar } = useDashboardContext();

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Wrapper>
      <div
        className={
          showSidebar
            ? `dashboard-container show-sidebar`
            : 'dashboard-container'
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
