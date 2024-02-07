import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../utils/pageData';
import Wrapper from '../assets/wrappers/DashboardNavLinks';
import { useDashboardContext } from '../pages/DashboardLayout';

const DashboardNavLinks = () => {
  const { showMobileLinks, toggleMobileLinks } = useDashboardContext();
  return (
    <Wrapper>
      <ul className="links">
        {dashboardLinks.map((link, index) => {
          const { text, path, icon } = link;

          return (
            <li key={index}>
              <NavLink to={path} onClick={toggleMobileLinks} end>
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
