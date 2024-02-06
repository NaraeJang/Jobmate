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
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const [jobStatus, setJobStatus] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobStatusFilter, setJobStatusFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  const toggleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        showMobileLinks,
        jobStatus,
        jobType,
        jobStatusFilter,
        jobTypeFilter,
        toggleSidebar,
        toggleDarkTheme,
        toggleMobileLinks,
        setJobStatus,
        setJobType,
        setJobStatusFilter,
        setJobTypeFilter,
      }}>
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
