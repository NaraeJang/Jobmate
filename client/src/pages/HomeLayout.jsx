import { Outlet } from 'react-router-dom';
import { NavbarDesktop, NavbarMobile } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const HomeLayout = () => {
  const date = new Date().getFullYear();

  return (
    <Wrapper>
      <NavbarDesktop />
      <NavbarMobile />
      <Outlet />
      <footer>
        <div className="container">
          <p>&copy; {date} Narae Jang. All rights reserved.</p>
        </div>
      </footer>
    </Wrapper>
  );
};
export default HomeLayout;
