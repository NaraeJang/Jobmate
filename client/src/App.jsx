import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Landing,
  Login,
  Register,
  HomeLayout,
  About,
  DashboardLayout,
  Overview,
  AddJob,
  AllJobs,
  Profile,
  Error,
  Admin,
} from './pages';

//ACTIONS
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addJobAction } from './pages/AddJob';

//LOADERS
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';
import { JobCardEdit } from './components';
0;
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
  {
    path: '/dashboard/',
    element: <DashboardLayout />,
    loader: dashboardLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'add-job', element: <AddJob />, action: addJobAction },
      {
        path: 'all-jobs',
        element: <AllJobs />,
        loader: allJobsLoader,
      },
      { path: 'profile', element: <Profile /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
