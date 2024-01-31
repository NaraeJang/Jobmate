import { Outlet } from 'react-router-dom';
import { NavbarDesktop, NavbarMobile } from '../components';

const HomeLayout = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <NavbarDesktop />
      {/* <NavbarMobile /> */}
      <Outlet />
      <footer>
        <p>&copy; {date} Narae Jang. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default HomeLayout;
