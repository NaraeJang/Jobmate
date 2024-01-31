import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <p>&copy; {date} Narae Jang. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default HomeLayout;
