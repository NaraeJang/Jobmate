import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../utils/pageData';
import Wrapper from '../assets/wrappers/DashboardNavLinks';

const DashboardNavLinks = ({ linksRef }) => {
  return (
    <Wrapper>
      <ul className="links" ref={linksRef}>
        {dashboardLinks.map((link, index) => {
          const { text, path, icon } = link;

          return (
            <li key={index}>
              <NavLink to={path} end>
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
