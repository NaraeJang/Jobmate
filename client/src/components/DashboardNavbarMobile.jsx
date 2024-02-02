import Wrapper from '../assets/wrappers/DashboardNavbarMobile';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Logo } from '.';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbarMobile = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-header">
          <button className="nav-toggle">
            <RxHamburgerMenu />
          </button>
          <Link to="/dashboard" className="logo">
            <Logo />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbarMobile;
