import { Link, NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavbarMobile';
import { Logo } from '.';
import { useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
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
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <div className="mobile-header-spacer"> </div>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}>
          <ul className="links" ref={linksRef}>
            <li>
              <NavLink to="./about" onClick={() => setShowLinks(false)}>
                About
              </NavLink>
            </li>
            <li>
              <Link
                className="btn btn-primary btn-small btn-block"
                to="./register"
                onClick={() => setShowLinks(false)}>
                Register
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-secondary btn-small btn-block"
                to="./login">
                Log In or Try Demo User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
