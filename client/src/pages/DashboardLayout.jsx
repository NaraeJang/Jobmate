import { Outlet, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import {
  Loading,
  DashboardNavbarDesktop,
  DashboardNavbarMobile,
  Sidebar,
} from '../components';

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <div>
          <DashboardNavbarDesktop />
          <DashboardNavbarMobile />
          <div className="dashboard-page">
            {isPageLoading ? <Loading /> : <Outlet />}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayout;
