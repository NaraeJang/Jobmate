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
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/dashboard/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'add-job', element: <AddJob /> },
      { path: 'all-jobs', element: <AllJobs /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
