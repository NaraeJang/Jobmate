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
  { path: '/login', element: <Login />, errorElement: <Error /> },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
  {
    path: '/dashboard/',
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'add-job', element: <AddJob /> },
      { path: 'all-jobs', element: <AllJobs /> },
      { path: 'profile', element: <Profile /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
