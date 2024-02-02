import Wrapper from '../assets/wrappers/DashboardNavbarMobile';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Logo } from '.';
import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarUser, ThemeToggle } from '.';
import { dashboardLinks } from '../utils/pageData';

const DashboardNavbarMobile = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };
  const containerOpen = {
    boxShadow: showLinks ? `var(--shadow-4)` : `none`,
    borderRadius: showLinks ? `0 0 12px 12px` : `0`,
  };

  return (
    <Wrapper>
      <div className="container" style={containerOpen}>
        <div
          className="nav-header"
          style={{
            borderBottom: showLinks ? '1px solid var(--grey-200)' : 'none',
          }}>
          <button className="nav-toggle" onClick={toggleLinks}>
            <RxHamburgerMenu />
          </button>
          <Link to="/dashboard" className="logo">
            <Logo />
          </Link>
          <div className="dark-mode__user">
            <ThemeToggle />
            <NavbarUser />
          </div>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}>
          <ul className="links" ref={linksRef}>
            {dashboardLinks.map((link, index) => {
              const { text, path, icon } = link;

              return (
                <li key={index}>
                  <NavLink to={`/dashboard/${path}`}>
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbarMobile;
