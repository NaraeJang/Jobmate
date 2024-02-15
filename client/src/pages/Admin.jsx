import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Admin';

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

  return <Wrapper>Admin</Wrapper>;
};
export default Admin;
