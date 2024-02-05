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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DashboardContext.Provider
      value={{ showSidebar, isDarkTheme, toggleSidebar, toggleDarkTheme }}>
      <Wrapper>
        <DashboardNavbarMobile />
        <main className="dashboard">
          <Sidebar />
          <div className="dashboard-container">
            <DashboardNavbarDesktop />
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
