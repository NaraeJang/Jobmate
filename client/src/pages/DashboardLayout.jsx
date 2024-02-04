import { Outlet, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import {
  Loading,
  DashboardNavbarDesktop,
  DashboardNavbarMobile,
  Sidebar,
} from '../components';
import { createContext, useContext, useEffect, useState } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log('clicked');
  };

  return (
    <DashboardContext.Provider value={(showSidebar, toggleSidebar)}>
      <Wrapper>
        <main className="dashboard">
          <Sidebar />
          <div className="dashboard-container">
            <DashboardNavbarDesktop />
            <DashboardNavbarMobile />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
