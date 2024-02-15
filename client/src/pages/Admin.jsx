import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Admin';
import StatItem from '../components/StatItem';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');

    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page.');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem title="current users" count={users} setting="pending" />
      <StatItem title="total jobs" count={jobs} setting="interview" />
    </Wrapper>
  );
};
export default Admin;
