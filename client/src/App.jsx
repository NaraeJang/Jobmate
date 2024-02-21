import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
import { action as profileAction } from './pages/Profile';

//LOADERS
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';
import { loader as adminLoader } from './pages/Admin';
import { loader as OverviewLoader } from './pages/Overview';
import { ErrorElement } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
    action: loginAction(queryClient),
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout queryClient={queryClient} />,
    loader: dashboardLoader(queryClient),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Overview />,
        loader: OverviewLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'add-job',
        element: <AddJob />,
        action: addJobAction(queryClient),
      },
      {
        path: 'all-jobs',
        element: <AllJobs queryClient={queryClient} />,
        loader: allJobsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'profile',
        element: <Profile />,
        action: profileAction(queryClient),
      },
      { path: 'admin', element: <Admin />, loader: adminLoader },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
