import {
  Outlet,
  useNavigation,
  useLoaderData,
  redirect,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import {
  Loading,
  DashboardNavbarDesktop,
  DashboardNavbarMobile,
  Sidebar,
} from '../components';
import { createContext, useContext, useState } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data.user;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);

  return isDarkTheme;
};

const DashboardLayout = () => {
  const user = useLoaderData();

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
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
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success(`Logging out...`);

    return;
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
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
        logoutUser,
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
