import { Outlet } from 'react-router-dom';
import { NavbarDesktop, NavbarMobile } from '../components';

const HomeLayout = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      <Outlet />
      <footer>
        <div className="container">
          <p>&copy; {date} Narae Jang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default HomeLayout;
