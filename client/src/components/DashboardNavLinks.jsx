import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../utils/pageData';
import Wrapper from '../assets/wrappers/DashboardNavLinks';
import { useDashboardContext } from '../pages/DashboardLayout';

const DashboardNavLinks = () => {
  const { showMobileLinks, setShowMobileLinks, toggleMobileLinks, user } =
    useDashboardContext();
  return (
    <Wrapper className="dropdown-content">
      <ul className="links">
        {dashboardLinks.map((link, index) => {
          const { text, path, icon } = link;

          const { role } = user;
          if (path === 'admin' && role !== 'admin') return;
          return (
            <li key={index}>
              <NavLink to={path} onClick={() => setShowMobileLinks(false)} end>
                <div className="icon">{icon}</div>
                <span>{text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default DashboardNavLinks;
