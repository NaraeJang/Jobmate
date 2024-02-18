import { useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Overview';
import { ChartContainer, OverviewCard } from '../components';
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const resp = await customFetch.get('/jobs/overview');
    return resp.data;
  } catch (error) {
    return error;
  }
};

const Overview = () => {
  const navigate = useNavigate();
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <Wrapper>
      <OverviewCard defaultStats={defaultStats} />
      <ChartContainer data={monthlyApplications} />
    </Wrapper>
  );
};
export default Overview;
