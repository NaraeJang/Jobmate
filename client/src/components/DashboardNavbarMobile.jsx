import Wrapper from '../assets/wrappers/DashboardNavbarMobile';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Logo } from '.';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarUser, ThemeToggle, DashboardNavLinks } from '.';
import { useDashboardContext } from '../pages/DashboardLayout';

const DashboardNavbarMobile = () => {
  const { showMobileLinks, toggleMobileLinks } = useDashboardContext();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linksStyle = {
    height: showMobileLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };
  const containerOpen = {
    boxShadow: showMobileLinks ? `var(--shadow-4)` : `none`,
    borderRadius: showMobileLinks ? `0 0 12px 12px` : `0`,
  };

  return (
    <Wrapper>
      <div className="container" style={containerOpen}>
        <div
          className="nav-header"
          style={{
            borderBottom: showMobileLinks
              ? '1px solid var(--grey-200)'
              : 'none',
          }}>
          <div className="toggle-container">
            <button className="nav-toggle" onClick={toggleMobileLinks}>
              <RxHamburgerMenu />
            </button>
            <div className="mobile-header-spacer"> </div>
          </div>

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
          <DashboardNavLinks linksRef={linksRef} />
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbarMobile;
